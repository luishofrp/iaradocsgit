import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './forms.module.css';

const API_BASE_URL = 'https://iaradocs-api.netlify.app/.netlify/functions';

export default function SolicitarMelhoria(): JSX.Element {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    titulo: '',
    descricao: '',
    prioridade: 'media',
    categoria: '',
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
## 📋 Informações do Solicitante

- **Nome:** ${formData.nome}
- **Email:** ${formData.email}
- **Categoria:** ${formData.categoria}
- **Prioridade:** ${formData.prioridade}

---

## 📝 Descrição da Melhoria

${formData.descricao}

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
          title: `💡 [Melhoria] ${formData.titulo}`,
          body: issueBody,
          labels: ['melhoria', `prioridade-${formData.prioridade}`, formData.categoria]
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
        <h2>🎉 Sugestão de Melhoria Recebida!</h2>
        <p>Olá <strong>${formData.nome}</strong>,</p>
        <p>Recebemos sua sugestão de melhoria para o sistema IARA:</p>
        <h3>${formData.titulo}</h3>
        <p><strong>Categoria:</strong> ${formData.categoria}<br>
        <strong>Prioridade:</strong> ${formData.prioridade}</p>
        <p>Você pode acompanhar o andamento através desta issue no GitHub:<br>
        <a href="${issueData.url}">${issueData.url}</a></p>
        <p>Obrigado por contribuir para a melhoria do sistema IARA!</p>
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
          subject: `Sugestão de Melhoria Recebida - ${formData.titulo}`,
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
          prioridade: 'media',
          categoria: '',
        });
        setFile(null);
      }, 5000);
    } catch (err) {
      setError(`Erro ao enviar sugestão: ${err.message}`);
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Solicitar Melhoria"
      description="Envie suas sugestões de melhoria para o sistema Iara">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>💡 Solicitar Melhoria</h1>
          <p>Sua opinião é muito importante! Ajude-nos a melhorar o sistema Iara enviando suas sugestões.</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <p>{error}</p>
          </div>
        )}

        {submitted ? (
          <div className={styles.successMessage}>
            <h2>✅ Sugestão enviada com sucesso!</h2>
            <p>Obrigado por contribuir para a melhoria do sistema Iara. Analisaremos sua sugestão em breve.</p>
            <p>Você receberá um email de confirmação com o link para acompanhar sua sugestão.</p>
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
                <label htmlFor="categoria">Categoria *</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                  disabled={loading}>
                  <option value="">Selecione uma categoria</option>
                  <option value="chat">Chat</option>
                  <option value="cotacao">Cotações</option>
                  <option value="contrato">Contratos</option>
                  <option value="orcamento">Orçamentos</option>
                  <option value="relatorios">Relatórios</option>
                  <option value="interface">Interface/UX</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="prioridade">Prioridade *</label>
                <select
                  id="prioridade"
                  name="prioridade"
                  value={formData.prioridade}
                  onChange={handleChange}
                  required
                  disabled={loading}>
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="titulo">Título da Melhoria *</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Resumo da melhoria que você sugere"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="descricao">Descrição Detalhada *</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
                disabled={loading}
                rows={8}
                placeholder="Descreva sua sugestão de melhoria em detalhes. Quanto mais informações, melhor!"
              />
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
              {loading ? 'Enviando...' : 'Enviar Sugestão'}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}