import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './forms.module.css';

const API_BASE_URL = 'https://iaradocs-api.netlify.app/.netlify/functions';

export default function RelatarBug(): JSX.Element {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    titulo: '',
    descricao: '',
    passos: '',
    severidade: 'media',
    navegador: '',
    anexo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Limite de 5MB
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('Arquivo muito grande. Tamanho máximo: 5MB');
        e.target.value = '';
        return;
      }
      
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let fileUrl = '';
      
      // Upload do arquivo para OneDrive se houver
      if (file) {
        const reader = new FileReader();
        const base64Content = await new Promise<string>((resolve, reject) => {
          reader.onloadend = () => {
            const result = reader.result as string;
            // Remover o prefixo data:type;base64,
            const base64 = result.split(',')[1];
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const uploadResponse = await fetch(`${API_BASE_URL}/upload-onedrive`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fileName: file.name,
            fileContent: base64Content,
            contentType: file.type
          })
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.error || 'Erro ao fazer upload do arquivo');
        }

        const uploadData = await uploadResponse.json();
        fileUrl = uploadData.file.webUrl;
      }

      // Criar Issue no GitHub
      const issueBody = `
## 📋 Informações do Relato

- **Nome:** ${formData.nome}
- **Email:** ${formData.email}
- **Severidade:** ${formData.severidade}
- **Navegador:** ${formData.navegador || 'Não informado'}

---

## 🐛 Descrição do Problema

${formData.descricao}

---

## 🔄 Passos para Reproduzir

${formData.passos}

${formData.anexo ? `\n---\n\n## 🔗 Link Externo\n\n[Ver anexo](${formData.anexo})` : ''}

${fileUrl ? `\n---\n\n## 📎 Anexo\n\n[📄 Ver arquivo: ${file?.name}](${fileUrl})` : ''}

---

*Enviado via IARA Docs em ${new Date().toLocaleString('pt-BR')}*
      `.trim();

      const issueResponse = await fetch(`${API_BASE_URL}/create-github-issue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `🐛 [Bug] ${formData.titulo}`,
          body: issueBody,
          labels: ['bug', `severidade-${formData.severidade}`]
        })
      });

      if (!issueResponse.ok) {
        const errorData = await issueResponse.json();
        throw new Error(errorData.error || 'Erro ao criar issue');
      }

      const issueData = await issueResponse.json();
      console.log('Issue criada:', issueData.url);

      // Enviar email de confirmação
      const emailBody = `
        <h2>🐛 Relatório de Bug Recebido!</h2>
        <p>Olá <strong>${formData.nome}</strong>,</p>
        <p>Recebemos seu relatório de bug do sistema IARA:</p>
        <h3>${formData.titulo}</h3>
        <p><strong>Severidade:</strong> ${formData.severidade}<br>
        <strong>Navegador:</strong> ${formData.navegador || 'Não informado'}</p>
        <p>Você pode acompanhar o andamento da correção através desta issue no GitHub:<br>
        <a href="${issueData.url}">${issueData.url}</a></p>
        <p>Obrigado por nos ajudar a melhorar o sistema IARA!</p>
        <hr>
        <small>IARA Docs - Sistema de Documentação</small>
      `;

      await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail: formData.email,
          subject: `Relatório de Bug Recebido - ${formData.titulo}`,
          body: emailBody
        })
      });

      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          nome: '',
          email: '',
          titulo: '',
          descricao: '',
          passos: '',
          severidade: 'media',
          navegador: '',
          anexo: '',
        });
        setFile(null);
      }, 5000);
    } catch (err) {
      setError(`Erro ao enviar relatório: ${err.message}`);
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Relatar Bug"
      description="Reporte problemas e bugs encontrados no sistema Iara">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>🐛 Relatar Bug</h1>
          <p>Encontrou um problema? Relate aqui para que possamos corrigi-lo o mais rápido possível.</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <p>{error}</p>
          </div>
        )}

        {submitted ? (
          <div className={styles.successMessage}>
            <h2>✅ Bug relatado com sucesso!</h2>
            <p>Obrigado por reportar este problema. Nossa equipe irá analisar e trabalhar na correção.</p>
            <p>Você receberá um email de confirmação com o link para acompanhar o bug.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Seu nome completo"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="severidade">Severidade *</label>
                <select
                  id="severidade"
                  name="severidade"
                  value={formData.severidade}
                  onChange={handleChange}
                  required
                  disabled={loading}>
                  <option value="baixa">Baixa - Problema cosmético</option>
                  <option value="media">Média - Funcionalidade parcial</option>
                  <option value="alta">Alta - Funcionalidade não funciona</option>
                  <option value="critica">Crítica - Sistema inacessível</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="navegador">Navegador</label>
                <input
                  type="text"
                  id="navegador"
                  name="navegador"
                  value={formData.navegador}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Ex: Chrome 120, Firefox 121"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="titulo">Título do Bug *</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Resumo breve do problema"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="descricao">Descrição do Problema *</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
                disabled={loading}
                rows={5}
                placeholder="Descreva o que aconteceu e o comportamento esperado"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="passos">Passos para Reproduzir *</label>
              <textarea
                id="passos"
                name="passos"
                value={formData.passos}
                onChange={handleChange}
                required
                disabled={loading}
                rows={6}
                placeholder="Liste os passos necessários para reproduzir o problema:
1. Acessar a página X
2. Clicar no botão Y
3. Preencher o campo Z
4. Observar o erro"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="anexo">URL de Screenshot/Vídeo (Opcional)</label>
              <input
                type="url"
                id="anexo"
                name="anexo"
                value={formData.anexo}
                onChange={handleChange}
                disabled={loading}
                placeholder="Link do Imgur, Google Drive, etc."
              />
              <small className={styles.helpText}>
                Ou adicione um link externo para imagem/vídeo
              </small>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="arquivo">Anexar Arquivo (Opcional)</label>
              <input
                type="file"
                id="arquivo"
                name="arquivo"
                onChange={handleFileChange}
                disabled={loading}
                accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
              />
              <small className={styles.helpText}>
                Aceito: Imagens, PDF, Word, Excel. Tamanho máximo: 5MB
                {file && ` | Arquivo selecionado: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`}
              </small>
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Relatório'}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}