import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './forms.module.css';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API ou serviço de email
    console.log('Melhoria enviada:', formData);
    setSubmitted(true);
    
    // Reset form após 3 segundos
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
    }, 3000);
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

        {submitted ? (
          <div className={styles.successMessage}>
            <h2>✅ Sugestão enviada com sucesso!</h2>
            <p>Obrigado por contribuir para a melhoria do sistema Iara. Analisaremos sua sugestão em breve.</p>
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
                <label htmlFor="categoria">Categoria *</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required>
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
                  required>
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
                rows={8}
                placeholder="Descreva sua sugestão de melhoria em detalhes. Quanto mais informações, melhor!"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar Sugestão
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}