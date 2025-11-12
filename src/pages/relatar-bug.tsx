import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './forms.module.css';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API ou serviço de email
    console.log('Bug relatado:', formData);
    setSubmitted(true);
    
    // Reset form após 3 segundos
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
    }, 3000);
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

        {submitted ? (
          <div className={styles.successMessage}>
            <h2>✅ Bug relatado com sucesso!</h2>
            <p>Obrigado por reportar este problema. Nossa equipe irá analisar e trabalhar na correção.</p>
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
                  required>
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
                placeholder="Link do Imgur, Google Drive, etc."
              />
              <small className={styles.helpText}>
                Se possível, adicione um link para uma imagem ou vídeo do problema
              </small>
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar Relatório
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}