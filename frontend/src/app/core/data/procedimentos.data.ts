
/**
 * Representa um procedimento oferecido pela Bella Cavalli.
 * Futuramente poderemos incluir preço, duração e disponibilidade.
 */
export interface Procedimento {
  id: number;
  nome: string;
  descricao: string;
  beneficios: string;
  imagem: string;
}

/**
 * Lista inicial dos procedimentos.
 * Na versão 1.0, os dados ficam no frontend.
 * Futuramente poderão ser carregados pelo backend.
 */
export const PROCEDIMENTOS: Procedimento[] = [
  {
    id: 1,
    nome: 'Drenagem linfática',
    descricao: 'Massagem com movimentos suaves e ritmados.',
    beneficios:
      'Pode auxiliar na redução de determinados tipos de inchaço e proporcionar sensação de leveza.',
    imagem: '/images/procedimentos/drenagem.jpg',
  },
  {
    id: 2,
    nome: 'Massagem modeladora',
    descricao: 'Técnica estética com movimentos manuais firmes.',
    beneficios:
      'Voltada ao cuidado corporal e à melhora temporária da aparência da pele.',
    imagem: '/images/procedimentos/modeladora.jpg',
  },
  {
    id: 3,
    nome: 'Massagem relaxante',
    descricao: 'Massagem com movimentos suaves e contínuos.',
    beneficios:
      'Promove relaxamento e pode ajudar a aliviar tensões musculares leves.',
    imagem: '/images/procedimentos/relaxante.jpg',
  },
  {
    id: 4,
    nome: 'Limpeza de pele',
    descricao: 'Procedimento estético de higienização da pele.',
    beneficios:
      'Auxilia na remoção de impurezas e no cuidado da aparência da pele.',
    imagem: '/images/procedimentos/limpeza-pele.jpg',
  },
  {
    id: 5,
    nome: 'Manta térmica',
    descricao: 'Procedimento que utiliza aquecimento corporal controlado.',
    beneficios:
      'Pode proporcionar sensação de aquecimento e relaxamento.',
    imagem: '/images/procedimentos/manta-termica.jpg',
  },
  {
    id: 6,
    nome: 'Massagem terapêutica',
    descricao: 'Massagem direcionada às necessidades individuais.',
    beneficios:
      'Pode contribuir para o relaxamento muscular e alívio de tensões.',
    imagem: '/images/procedimentos/terapeutica.jpg',
  },
  {
    id: 7,
    nome: 'Massagem com pedras quentes',
    descricao: 'Massagem realizada com pedras aquecidas.',
    beneficios:
      'Combina calor e movimentos de massagem para promover relaxamento.',
    imagem: '/images/procedimentos/pedras-quentes.jpg',
  },
  {
    id: 8,
    nome: 'Massagem para Gestantes',
    descricao:
      'Massagem suave e adaptada para proporcionar conforto durante a gestação.',
    beneficios:
      'Pode auxiliar no relaxamento e aliviar tensões musculares leves. O atendimento requer avaliação prévia de segurança e, quando indicado, orientação do profissional responsável pelo pré-natal.',
    imagem: '/images/procedimentos/gestantes.jpg',
  },
];
