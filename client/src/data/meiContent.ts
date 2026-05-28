export interface Module {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  explanation: ExplanationSection[];
  cronograma: CronogramaStep[];
  forcaWords: ForcaWord[];
  quiz: QuizQuestion[];
  glossario: GlossarioTerm[];
}

export interface ExplanationSection {
  type: "paragraph" | "highlight-box" | "bullet-list" | "title";
  content: string;
  items?: string[];
  variant?: "info" | "warning" | "success" | "tip";
}

export interface CronogramaStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  status: "required" | "optional" | "result";
}

export interface ForcaWord {
  word: string;
  hint: string;
  category: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GlossarioTerm {
  term: string;
  definition: string;
}

export const modules: Module[] = [
  {
    id: "modulo1",
    title: "Módulo 1",
    subtitle: "Introdução ao MEI",
    icon: "🏪",
    color: "orange",
    explanation: [
      {
        type: "title",
        content: "O que é o MEI?",
      },
      {
        type: "paragraph",
        content:
          "O <strong>Microempreendedor Individual (MEI)</strong> é a pessoa que trabalha por conta própria e se legaliza como pequeno empresário. Criado pela <strong>Lei Complementar nº 128/2008</strong>, o MEI nasceu com um propósito claro: <em>tirar da informalidade milhões de trabalhadores brasileiros</em>, oferecendo um regime tributário simplificado, burocracia reduzida e acesso a benefícios previdenciários.",
      },
      {
        type: "highlight-box",
        variant: "info",
        content:
          "📌 <strong>Definição Legal:</strong> O MEI é um empresário individual com receita bruta anual de até <strong>R$ 81.000,00</strong> (ou proporcional no ano de abertura), optante pelo <strong>Simples Nacional</strong> e enquadrado no <strong>SIMEI</strong> — Sistema de Recolhimento em Valores Fixos Mensais.",
      },
      {
        type: "title",
        content: "Quem pode ser MEI?",
      },
      {
        type: "paragraph",
        content:
          "Para se enquadrar como MEI, o trabalhador deve atender <strong>simultaneamente</strong> a todos os critérios abaixo. Verifique cada item com atenção antes de iniciar o processo de abertura:",
      },
      {
        type: "bullet-list",
        content: "Critérios obrigatórios para ser MEI:",
        items: [
          "Trabalhar por conta própria ou ter um único empregado",
          "Ter receita bruta anual de até <strong>R$ 81.000,00</strong>",
          "Exercer atividade prevista na tabela de CNAEs do MEI",
          "Não ser sócio, titular ou administrador de outra empresa",
          "Não ser servidor público federal ativo",
          "Possuir CPF e conta gov.br nível prata ou ouro",
        ],
      },
      {
        type: "title",
        content: "Quem NÃO pode ser MEI?",
      },
      {
        type: "highlight-box",
        variant: "warning",
        content:
          "⚠️ <strong>Atenção:</strong> As vedações a seguir são frequente fonte de dúvidas no atendimento. Caso o cliente se encaixe em alguma delas, oriente sobre outras formas jurídicas como ME (Microempresa).",
      },
      {
        type: "bullet-list",
        content: "Não podem ser MEI:",
        items: [
          "Sócios ou administradores de outra empresa (salvo como titular de MEI)",
          "Profissionais regulamentados por conselho de classe que exijam registro (ex.: médico CRM, advogado OAB, engenheiro CREA)",
          "Servidores públicos federais ativos (exceto aposentados)",
          "Atividades não listadas na tabela de CNAEs permitidos ao MEI",
          "Quem já atingiu o limite de faturamento anual (R$ 81.000,00)",
        ],
      },
      {
        type: "title",
        content: "Benefícios e Vantagens do MEI",
      },
      {
        type: "paragraph",
        content:
          "A formalização como MEI oferece um conjunto robusto de benefícios. Esses benefícios devem ser comunicados ao cliente durante o atendimento, pois são o <strong>principal motivador</strong> para a regularização:",
      },
      {
        type: "bullet-list",
        content: "Principais vantagens:",
        items: [
          "🏥 <strong>INSS e benefícios previdenciários</strong> — aposentadoria, auxílio-doença, salário-maternidade",
          "📄 <strong>CNPJ próprio</strong> — acesso a conta bancária PJ, crédito empresarial e emissão de nota fiscal",
          "💰 <strong>Tributação simplificada</strong> — um único boleto (DAS) com valor fixo mensal muito baixo",
          "📊 <strong>Sem contabilidade obrigatória</strong> — apenas a DASN anual como obrigação acessória",
          "🤝 <strong>Pode contratar um empregado</strong> com salário mínimo ou piso da categoria",
          "🏦 <strong>Acesso a microcrédito</strong> e linhas especiais de financiamento",
        ],
      },
      {
        type: "highlight-box",
        variant: "success",
        content:
          "✅ <strong>Dica para o atendimento:</strong> Ao explicar os benefícios, use exemplos concretos da realidade do cliente. Para uma cabeleireira, destaque o salário-maternidade e a aposentadoria. Para um comerciante, destaque o CNPJ para compras no atacado e emissão de nota fiscal.",
      },
    ],
    cronograma: [
      {
        step: 1,
        title: "Verifique sua situação",
        description: "Antes de tudo, confirme que você atende aos requisitos para ser MEI",
        icon: "🔍",
        status: "required",
        details: [
          "CPF ativo e sem pendências na Receita Federal",
          "Atividade pretendida consta na tabela de CNAEs do MEI",
          "Faturamento esperado: até R$ 81.000/ano",
          "Não possui outro CNPJ ativo como sócio ou titular",
        ],
      },
      {
        step: 2,
        title: "Crie sua conta gov.br",
        description: "Acesse o portal gov.br e crie ou atualize sua conta para nível Prata ou Ouro",
        icon: "👤",
        status: "required",
        details: [
          "Acesse: gov.br/contabrasil",
          "Nível mínimo necessário: Prata",
          "Para atingir nível Prata: validação por banco digital ou reconhecimento facial",
          "Guarde bem seu CPF, senha e dados de acesso",
        ],
      },
      {
        step: 3,
        title: "Acesse o Portal do Empreendedor",
        description: "Entre em gov.br/mei com sua conta gov.br",
        icon: "🌐",
        status: "required",
        details: [
          "Site oficial: www.gov.br/mei",
          "Clique em 'Formalize-se' ou 'Quero ser MEI'",
          "Faça login com sua conta gov.br",
          "Confirme os dados pessoais pré-carregados",
        ],
      },
      {
        step: 4,
        title: "Escolha sua atividade (CNAE)",
        description: "Selecione a(s) atividade(s) que você exerce — devem estar na lista permitida ao MEI",
        icon: "🏷️",
        status: "required",
        details: [
          "Pesquise pelo nome da atividade ou código CNAE",
          "Pode selecionar mais de uma atividade (principal + secundária)",
          "Confirme se a atividade gera ISS, ICMS ou ambos — isso define o valor do DAS",
          "Dica: use o buscador do SEBRAE para encontrar o CNAE correto",
        ],
      },
      {
        step: 5,
        title: "Informe o endereço",
        description: "Cadastre o endereço do estabelecimento ou residencial, conforme a atividade",
        icon: "📍",
        status: "required",
        details: [
          "Endereço comercial: onde a atividade é exercida",
          "Endereço residencial: permitido para atividades sem ponto fixo",
          "Confirme CEP, logradouro, número e complemento",
          "O município determina a alíquota de ISS aplicável",
        ],
      },
      {
        step: 6,
        title: "Defina um nome fantasia",
        description: "Escolha o nome comercial que aparecerá nas notas fiscais e documentos",
        icon: "✏️",
        status: "optional",
        details: [
          "O nome fantasia é opcional, mas recomendado",
          "Pode ser diferente do nome civil do titular",
          "Evite nomes muito genéricos — pense em algo memorável para seus clientes",
          "Pode ser alterado depois pelo Portal do Empreendedor",
        ],
      },
      {
        step: 7,
        title: "Revise e confirme os dados",
        description: "Verifique todas as informações antes de finalizar o cadastro",
        icon: "✅",
        status: "required",
        details: [
          "Confirme: nome, CPF, data de nascimento, atividade(s), endereço",
          "Leia os termos e condições com atenção",
          "Marque as declarações de enquadramento",
          "Clique em 'Concluir' para finalizar o registro",
        ],
      },
      {
        step: 8,
        title: "Receba o CCMEI",
        description: "O Certificado de Condição de Microempreendedor Individual é emitido imediatamente",
        icon: "📜",
        status: "result",
        details: [
          "O CNPJ é gerado na hora — você já pode usá-lo",
          "Salve e imprima o CCMEI — ele funciona como contrato social",
          "Acesse para emitir a primeira guia DAS",
          "Providencie a inscrição municipal para emitir notas fiscais de serviço",
        ],
      },
    ],
    forcaWords: [
      { word: "FORMALIZACAO", hint: "Processo de tornar legal, registrar oficialmente o negócio", category: "Conceito" },
      { word: "MICROEMPREENDEDOR", hint: "Denominação do empresário individual de pequeno porte", category: "Conceito" },
      { word: "CNPJ", hint: "Número de identificação cadastral da empresa na Receita Federal", category: "Sigla" },
      { word: "SIMPLES", hint: "Regime tributário simplificado onde o MEI se enquadra", category: "Tributos" },
      { word: "RECEITA", hint: "Total de dinheiro recebido pelas vendas ou serviços prestados", category: "Financeiro" },
      { word: "INSS", hint: "Previdência Social — garante aposentadoria e outros benefícios", category: "Sigla" },
      { word: "CNAE", hint: "Código que classifica a atividade econômica exercida pelo MEI", category: "Cadastro" },
      { word: "EMPREENDEDOR", hint: "Pessoa que cria e gerencia um negócio próprio", category: "Conceito" },
    ],
    quiz: [
      {
        question: "Qual é o limite de faturamento anual para permanecer como MEI?",
        options: ["R$ 60.000,00", "R$ 81.000,00", "R$ 120.000,00", "R$ 200.000,00"],
        correctIndex: 1,
        explanation: "O MEI pode faturar até R$ 81.000,00 por ano. Se ultrapassar esse limite, deve migrar para ME (Microempresa).",
      },
      {
        question: "O MEI pode ter quantos empregados registrados?",
        options: ["Nenhum", "Um (1)", "Dois (2)", "Cinco (5)"],
        correctIndex: 1,
        explanation: "O MEI pode contratar apenas UM empregado, que deve receber o salário mínimo ou o piso salarial da categoria.",
      },
      {
        question: "Qual lei criou a figura do MEI no Brasil?",
        options: [
          "Lei Complementar nº 123/2006",
          "Lei Complementar nº 128/2008",
          "Lei Complementar nº 155/2016",
          "Lei Complementar nº 197/2022",
        ],
        correctIndex: 1,
        explanation: "A Lei Complementar nº 128/2008 criou a figura do MEI, alterando a Lei Geral das Micro e Pequenas Empresas (LC 123/2006).",
      },
      {
        question: "Um servidor público federal ATIVO pode ser MEI?",
        options: ["Sim, sem restrições", "Sim, mas com limitações", "Não pode", "Depende da atividade"],
        correctIndex: 2,
        explanation: "Servidores públicos federais ativos NÃO podem ser MEI. Aposentados e servidores estaduais/municipais devem verificar a legislação específica.",
      },
      {
        question: "Para abrir o MEI, qual nível mínimo de conta gov.br é necessário?",
        options: ["Bronze", "Prata", "Ouro", "Diamante"],
        correctIndex: 1,
        explanation: "É necessário ter conta gov.br no nível Prata (ou superior). Você pode elevar seu nível via validação por banco digital ou reconhecimento facial.",
      },
    ],
    glossario: [
      { term: "MEI", definition: "Microempreendedor Individual — empresário individual com receita bruta anual de até R$ 81.000,00." },
      { term: "SIMEI", definition: "Sistema de Recolhimento em Valores Fixos Mensais dos Tributos abrangidos pelo Simples Nacional para o MEI." },
      { term: "CNAE", definition: "Classificação Nacional de Atividades Econômicas — código que identifica a atividade exercida pelo MEI." },
      { term: "CCMEI", definition: "Certificado de Condição de Microempreendedor Individual — documento emitido no ato da abertura, equivale ao contrato social." },
      { term: "Receita Bruta", definition: "Total das vendas e serviços prestados, sem dedução de custos, despesas ou impostos." },
      { term: "CNPJ", definition: "Cadastro Nacional da Pessoa Jurídica — número de identificação da empresa perante a Receita Federal." },
    ],
  },
  {
    id: "modulo2",
    title: "Módulo 2",
    subtitle: "Formalização e DAS",
    icon: "📄",
    color: "orange",
    explanation: [
      {
        type: "title",
        content: "O que é o DAS?",
      },
      {
        type: "paragraph",
        content:
          "O <strong>DAS (Documento de Arrecadação do Simples Nacional)</strong> é o <em>boleto unificado</em> pelo qual o MEI recolhe todos os seus tributos em uma única guia mensal. Em vez de pagar impostos separados para o município, estado e governo federal, o MEI quita tudo com um único pagamento mensal de valor fixo.",
      },
      {
        type: "highlight-box",
        variant: "info",
        content:
          "💡 <strong>Conceito-chave:</strong> Ao pagar o DAS, o MEI está quites com <strong>INSS</strong> (Previdência Social), <strong>ISS</strong> (Imposto Sobre Serviços) e <strong>ICMS</strong> (Imposto sobre Circulação de Mercadorias) de uma só vez.",
      },
      {
        type: "title",
        content: "Valores do DAS (Tabela 2024)",
      },
      {
        type: "paragraph",
        content:
          "O valor do DAS é <strong>fixo e mensal</strong>, calculado com base no salário mínimo vigente. Em 2024, com salário mínimo de <strong>R$ 1.412,00</strong>, o INSS do MEI é de 5% = <strong>R$ 70,60</strong>. O ISS e o ICMS são acrescidos conforme a atividade:",
      },
      {
        type: "bullet-list",
        content: "Valores do DAS por tipo de atividade:",
        items: [
          "🔧 <strong>Prestador de Serviços (ISS):</strong> R$ 70,60 + R$ 5,00 = <strong>R$ 75,60/mês</strong>",
          "🛒 <strong>Comércio/Indústria (ICMS):</strong> R$ 70,60 + R$ 1,00 = <strong>R$ 71,60/mês</strong>",
          "🔁 <strong>Ambas as atividades:</strong> R$ 70,60 + R$ 6,00 = <strong>R$ 76,60/mês</strong>",
          "🚛 <strong>Caminhoneiro:</strong> 12% do salário mínimo (alíquota diferenciada)",
        ],
      },
      {
        type: "title",
        content: "Vencimento e Consequências do Atraso",
      },
      {
        type: "paragraph",
        content:
          "O DAS vence todo <strong>dia 20 do mês seguinte</strong> à competência. O DAS de janeiro vence em 20 de fevereiro, o de fevereiro em 20 de março, e assim por diante. Se o dia 20 cair em fim de semana ou feriado, o vencimento é antecipado para o <strong>último dia útil anterior</strong>.",
      },
      {
        type: "highlight-box",
        variant: "warning",
        content:
          "⚠️ <strong>Atraso gera custos!</strong> DAS pago fora do prazo acumula: <strong>multa de 0,33% ao dia</strong> (máximo 20%) + <strong>juros SELIC</strong> acumulados + mora. Além disso, meses sem pagamento suspendem os benefícios previdenciários (aposentadoria, auxílio-doença).",
      },
      {
        type: "title",
        content: "Como Emitir o DAS",
      },
      {
        type: "bullet-list",
        content: "Existem três formas principais de emitir o DAS:",
        items: [
          "📱 <strong>App MEI</strong> (recomendado) — baixe gratuitamente no Google Play ou App Store, acesse com CPF e senha gov.br",
          "🖥️ <strong>Portal PGMEI</strong> — acesse o Simples Nacional (www8.receita.fazenda.gov.br) e emita direto no portal",
          "🌐 <strong>gov.br/mei</strong> — painel completo com opção de emitir e pagar DAS",
        ],
      },
      {
        type: "highlight-box",
        variant: "tip",
        content:
          "✅ <strong>Dica de Atendimento:</strong> Recomende sempre o <strong>débito automático</strong> para clientes com dificuldade de acesso à internet ou que esquecem o vencimento. O débito é configurado no PGMEI e elimina o risco de inadimplência.",
      },
      {
        type: "title",
        content: "Alteração e Baixa do MEI",
      },
      {
        type: "paragraph",
        content:
          "O MEI pode ser alterado ou encerrado a qualquer momento pelo Portal do Empreendedor. <strong>Alterações</strong> incluem: mudança de endereço, inclusão/exclusão de atividade, alteração de nome fantasia e mudança de município. O <strong>encerramento</strong> (baixa) deve ser precedido pela quitação de todos os DAS em aberto e entrega da DASN pendente.",
      },
      {
        type: "highlight-box",
        variant: "warning",
        content:
          "🚨 <strong>Importante:</strong> A baixa do MEI <strong>NÃO extingue</strong> as obrigações tributárias anteriores. O cliente ainda deverá quitar débitos existentes e entregar a DASN-SIMEI do período proporcional ao encerramento.",
      },
    ],
    cronograma: [
      {
        step: 1,
        title: "Acesse o PGMEI ou App MEI",
        description: "Abra o portal ou aplicativo oficial para emissão do DAS",
        icon: "📱",
        status: "required",
        details: [
          "App MEI: disponível no Google Play e App Store (gratuito)",
          "Portal: www8.receita.fazenda.gov.br/SimplesNacional → PGMEI",
          "Faça login com CPF e senha gov.br",
          "Verifique se o CNPJ está ativo e regularizado",
        ],
      },
      {
        step: 2,
        title: "Selecione o período de competência",
        description: "Escolha o mês a que se refere o tributo que deseja pagar",
        icon: "📅",
        status: "required",
        details: [
          "Competência = mês a que o tributo se refere",
          "O DAS de JANEIRO vence em 20 de FEVEREIRO",
          "Para meses em atraso, selecione cada mês individualmente",
          "O sistema calculará automaticamente multa e juros",
        ],
      },
      {
        step: 3,
        title: "Gere o boleto DAS",
        description: "Confirme e gere o documento de pagamento",
        icon: "🖨️",
        status: "required",
        details: [
          "O DAS gerado inclui todos os tributos unificados (INSS + ISS e/ou ICMS)",
          "O boleto tem validade de 30 dias — gere próximo ao vencimento",
          "Opção de pagamento via Pix também está disponível",
          "Salve ou imprima o DAS para comprovante",
        ],
      },
      {
        step: 4,
        title: "Realize o pagamento",
        description: "Pague via internet banking, app do banco, caixa eletrônico ou lotérica",
        icon: "💳",
        status: "required",
        details: [
          "Pagar até o dia 20 do mês subsequente",
          "Aceito em qualquer banco e correspondente bancário",
          "Pix disponível: copie o código QR do DAS",
          "Guarde o comprovante de pagamento",
        ],
      },
      {
        step: 5,
        title: "Verifique a confirmação",
        description: "Confirme que o pagamento foi processado corretamente",
        icon: "✅",
        status: "result",
        details: [
          "Acesse o Extrato do Simples Nacional para confirmar",
          "O processamento pode levar até 3 dias úteis",
          "DAS 'Em Processamento' é normal — aguarde",
          "Guarde todos os comprovantes por pelo menos 5 anos",
        ],
      },
      {
        step: 6,
        title: "Configure o Débito Automático (Opcional)",
        description: "Elimine o risco de esquecer o pagamento configurando o débito automático",
        icon: "🔄",
        status: "optional",
        details: [
          "Acesse PGMEI → Opções → Débito Automático",
          "Informe banco, agência e número da conta corrente",
          "O banco validará o cadastro em até 5 dias úteis",
          "O débito ocorre automaticamente no dia do vencimento",
        ],
      },
    ],
    forcaWords: [
      { word: "DAS", hint: "Documento de Arrecadação do Simples Nacional — boleto mensal do MEI", category: "Sigla" },
      { word: "VENCIMENTO", hint: "Data limite para pagamento sem multa — dia 20 do mês seguinte", category: "Prazo" },
      { word: "COMPETENCIA", hint: "Mês ao qual o tributo se refere (diferente do mês de pagamento)", category: "Conceito" },
      { word: "INSS", hint: "Contribuição previdenciária que garante aposentadoria e benefícios", category: "Tributo" },
      { word: "ALIQUOTA", hint: "Percentual aplicado sobre a base de cálculo para definir o imposto", category: "Tributo" },
      { word: "BOLETO", hint: "Documento bancário usado para realizar o pagamento do DAS", category: "Pagamento" },
      { word: "PGMEI", hint: "Portal online da Receita Federal para emissão e gestão do DAS", category: "Sistema" },
      { word: "ICMS", hint: "Imposto estadual sobre circulação de mercadorias — incluso no DAS do comerciante", category: "Tributo" },
    ],
    quiz: [
      {
        question: "Quando vence o DAS referente ao mês de março?",
        options: ["Dia 20 de março", "Dia 20 de abril", "Dia 30 de março", "Último dia de abril"],
        correctIndex: 1,
        explanation: "O DAS vence no dia 20 do mês SEGUINTE à competência. Portanto, o DAS de março vence em 20 de abril.",
      },
      {
        question: "Qual é o valor do DAS mensal para um MEI prestador de serviços em 2024?",
        options: ["R$ 71,60", "R$ 75,60", "R$ 76,60", "R$ 80,00"],
        correctIndex: 1,
        explanation: "Para prestador de serviços (ISS): INSS R$ 70,60 + ISS R$ 5,00 = R$ 75,60/mês (base 2024, salário mínimo R$ 1.412,00).",
      },
      {
        question: "O que acontece com os benefícios previdenciários se o MEI não pagar o DAS?",
        options: [
          "Nada, são garantidos pelo CNPJ",
          "Ficam suspensos até regularização",
          "São cancelados definitivamente",
          "Dependem do tipo de benefício",
        ],
        correctIndex: 1,
        explanation: "Meses sem pagamento de DAS ficam sem cobertura previdenciária. Os benefícios ficam suspensos até a regularização dos pagamentos em atraso.",
      },
      {
        question: "O DAS unifica quais tributos?",
        options: [
          "IR, CSLL e PIS",
          "INSS, ISS e/ou ICMS",
          "IOF, COFINS e IPI",
          "IRPJ, CSLL e COFINS",
        ],
        correctIndex: 1,
        explanation: "O DAS unifica INSS (Previdência Social), ISS (Imposto Sobre Serviços, para prestadores) e ICMS (para comércio/indústria), em um único boleto mensal.",
      },
      {
        question: "Onde o MEI pode emitir o DAS?",
        options: [
          "Apenas em agências bancárias",
          "App MEI, PGMEI ou portal gov.br/mei",
          "Somente na Receita Federal",
          "Nos Correios ou lotéricas",
        ],
        correctIndex: 1,
        explanation: "O DAS pode ser emitido pelo App MEI (Google Play/App Store), pelo portal PGMEI da Receita Federal ou pelo painel em gov.br/mei — todos gratuitos.",
      },
    ],
    glossario: [
      { term: "DAS", definition: "Documento de Arrecadação do Simples Nacional — boleto único mensal do MEI que unifica INSS, ISS e ICMS." },
      { term: "Competência", definition: "Mês ao qual o tributo se refere. O DAS de competência janeiro vence em 20 de fevereiro." },
      { term: "ISS", definition: "Imposto Sobre Serviços — tributo municipal pago por MEIs que prestam serviços." },
      { term: "ICMS", definition: "Imposto sobre Circulação de Mercadorias e Serviços — tributo estadual pago por MEIs comerciantes." },
      { term: "PGMEI", definition: "Portal de geração e gerenciamento do DAS, disponível no site do Simples Nacional (Receita Federal)." },
      { term: "Débito Automático", definition: "Configuração que permite o débito do DAS diretamente na conta bancária do MEI na data do vencimento." },
    ],
  },
  {
    id: "modulo3",
    title: "Módulo 3",
    subtitle: "DASN-SIMEI e Obrigações",
    icon: "📊",
    color: "orange",
    explanation: [
      {
        type: "title",
        content: "O que é a DASN-SIMEI?",
      },
      {
        type: "paragraph",
        content:
          "A <strong>DASN-SIMEI (Declaração Anual Simplificada para o Microempreendedor Individual)</strong> é a obrigação acessória anual do MEI. Por meio dela, o empreendedor informa à <strong>Receita Federal</strong> a receita bruta obtida no ano-calendário anterior e declara se contratou ou não empregado durante o período.",
      },
      {
        type: "highlight-box",
        variant: "info",
        content:
          "📌 <strong>Definição técnica:</strong> A DASN-SIMEI é uma <em>declaração</em> — não um pagamento. Ela serve para que o governo verifique se o MEI manteve-se dentro do limite de faturamento. <strong>Não confunda com o DAS</strong> (que é o boleto de pagamento mensal).",
      },
      {
        type: "title",
        content: "Prazo de Entrega",
      },
      {
        type: "paragraph",
        content:
          "A DASN-SIMEI deve ser entregue anualmente até o <strong>dia 31 de maio</strong> do ano seguinte ao ano-calendário declarado. Portanto, a declaração referente ao ano de 2024 deve ser entregue até <strong>31 de maio de 2025</strong>. A entrega é feita exclusivamente pelo <strong>Portal do Simples Nacional</strong> da Receita Federal.",
      },
      {
        type: "highlight-box",
        variant: "warning",
        content:
          "⚠️ <strong>Multa por atraso:</strong> A entrega fora do prazo gera multa mínima de <strong>R$ 50,00</strong>, independentemente de ter ou não receita a declarar. Oriente sempre o cliente sobre este prazo com antecedência.",
      },
      {
        type: "title",
        content: "O que declarar na DASN",
      },
      {
        type: "bullet-list",
        content: "Informações obrigatórias na DASN-SIMEI:",
        items: [
          "📊 <strong>Receita com Comércio/Indústria (ICMS):</strong> total das vendas de produtos físicos no ano, sem deduzir custos",
          "🔧 <strong>Receita com Serviços (ISS):</strong> total dos serviços prestados no ano, sem deduzir despesas",
          "👷 <strong>Empregado:</strong> declarar se contratou ou não empregado no período",
          "📅 <strong>Período:</strong> ano-calendário completo (1º de janeiro a 31 de dezembro)",
        ],
      },
      {
        type: "title",
        content: "O que NÃO entra na Receita Bruta",
      },
      {
        type: "paragraph",
        content:
          "Muitos MEIs têm dúvida sobre o que deve ou não compor o cálculo da receita bruta para a DASN. <strong>Receita bruta = total recebido por vendas e serviços</strong>. Não entram nesse cálculo:",
      },
      {
        type: "bullet-list",
        content: "Não integram a receita bruta:",
        items: [
          "❌ Reembolso de despesas pagas pelo cliente (ex.: material comprado para uma obra)",
          "❌ Doações, empréstimos e financiamentos recebidos",
          "❌ Rendimentos de aplicações financeiras pessoais",
          "❌ Valores recebidos de salário (como funcionário em outro emprego)",
          "✅ <strong>Entram:</strong> Todas as vendas de mercadorias, serviços prestados, gorjetas e comissões recebidas",
        ],
      },
      {
        type: "title",
        content: "O que acontece se o MEI ultrapassar o limite?",
      },
      {
        type: "highlight-box",
        variant: "warning",
        content:
          "🚨 <strong>Atenção — ponto crítico no atendimento:</strong> Se o MEI faturar acima de R$ 81.000,00 no ano, as consequências dependem do percentual de excesso.",
      },
      {
        type: "bullet-list",
        content: "Consequências por excesso de faturamento:",
        items: [
          "📈 <strong>Excesso de até 20%</strong> (faturamento até R$ 97.200,00): o MEI é excluído do SIMEI apenas no ano seguinte, com efeito retroativo a 1º de janeiro",
          "📈 <strong>Excesso acima de 20%</strong> (faturamento acima de R$ 97.200,00): exclusão com efeito retroativo ao mês em que ocorreu o excesso — maior impacto fiscal",
          "📋 Deve migrar para ME (Microempresa) e adequar obrigações fiscais",
          "💰 Haverá cálculo de diferença de tributos a pagar referentes ao período de excesso",
        ],
      },
      {
        type: "title",
        content: "DASN Retificadora",
      },
      {
        type: "paragraph",
        content:
          "Caso o MEI perceba um erro após a entrega da DASN, pode transmitir uma <strong>Declaração Retificadora</strong>. O processo é idêntico ao da declaração original — ao entregar uma nova DASN para o mesmo período, ela <em>automaticamente substitui</em> a anterior. Não há multa pela retificadora em si, apenas pelo eventual tributo em atraso gerado pela correção.",
      },
      {
        type: "highlight-box",
        variant: "success",
        content:
          "✅ <strong>Boas práticas:</strong> Oriente o cliente a guardar comprovantes de recebimentos ao longo do ano (extrato bancário, controle de caixa) para facilitar o preenchimento da DASN. Uma planilha simples mensal já basta para o MEI.",
      },
    ],
    cronograma: [
      {
        step: 1,
        title: "Reúna os dados do ano anterior",
        description: "Levante o total de receitas obtidas durante o ano-calendário",
        icon: "📁",
        status: "required",
        details: [
          "Separe receitas de serviços (ISS) e de vendas (ICMS)",
          "Use extratos bancários, recibos e controle de caixa",
          "Verifique se contratou empregado no período",
          "Confirme o período: 1º de janeiro a 31 de dezembro",
        ],
      },
      {
        step: 2,
        title: "Acesse o Portal do Simples Nacional",
        description: "Entre em www8.receita.fazenda.gov.br/SimplesNacional com seu CNPJ",
        icon: "🌐",
        status: "required",
        details: [
          "Acesse: Portal Simples Nacional → SIMEI → Declarações → DASN-SIMEI",
          "Faça login com CNPJ e código de acesso ou certificado digital",
          "Também disponível pelo e-CAC (gov.br/receitafederal)",
          "Prazo limite: 31 de maio do ano seguinte",
        ],
      },
      {
        step: 3,
        title: "Selecione o período a declarar",
        description: "Informe o ano-calendário que está declarando",
        icon: "📅",
        status: "required",
        details: [
          "Selecione o ano correto (ex.: 2024 para declaração entregue em 2025)",
          "Para MEI que encerrou atividade, há DASN de extinção com prazo diferente",
          "DASN de extinção: último dia do mês seguinte ao encerramento",
          "Para anos anteriores em atraso, entregar em ordem cronológica",
        ],
      },
      {
        step: 4,
        title: "Preencha a receita bruta",
        description: "Informe separadamente as receitas de serviços e de comércio",
        icon: "💰",
        status: "required",
        details: [
          "Campo 1 — Receita com Comércio/Indústria: total de vendas de produtos",
          "Campo 2 — Receita com Serviços: total de serviços prestados",
          "Use o valor BRUTO (sem deduzir custos ou despesas)",
          "Se não teve receita, informe R$ 0,00 em ambos os campos",
        ],
      },
      {
        step: 5,
        title: "Informe sobre empregado",
        description: "Declare se contratou ou não empregado durante o ano",
        icon: "👷",
        status: "required",
        details: [
          "Responda Sim ou Não para a pergunta sobre empregado",
          "Se Sim: informe o CPF do empregado e período de contratação",
          "MEI pode ter no máximo 1 empregado",
          "Salário: mínimo nacional ou piso da categoria",
        ],
      },
      {
        step: 6,
        title: "Revise e transmita",
        description: "Confira todos os dados e envie a declaração",
        icon: "📤",
        status: "required",
        details: [
          "Revise os valores informados com atenção",
          "Clique em 'Transmitir' para enviar à Receita Federal",
          "O sistema gerará o recibo de entrega — guarde!",
          "A DASN é aceita imediatamente — confirmação instantânea",
        ],
      },
      {
        step: 7,
        title: "Salve o recibo de entrega",
        description: "Guarde o comprovante de entrega da DASN",
        icon: "📜",
        status: "result",
        details: [
          "O recibo é a prova de que a declaração foi entregue",
          "Guarde junto com os documentos financeiros do ano",
          "Prazo de guarda recomendado: mínimo 5 anos",
          "Se fizer retificadora, guarde ambos os recibos",
        ],
      },
    ],
    forcaWords: [
      { word: "DECLARACAO", hint: "Documento enviado à Receita Federal informando o faturamento anual do MEI", category: "Obrigação" },
      { word: "DASN", hint: "Sigla da declaração anual simplificada para o Microempreendedor Individual", category: "Sigla" },
      { word: "FATURAMENTO", hint: "Total de receitas obtidas pelo MEI no período — base para a declaração", category: "Financeiro" },
      { word: "RETIFICADORA", hint: "Nova declaração que corrige e substitui uma DASN entregue com erro", category: "Conceito" },
      { word: "PRAZO", hint: "Data limite para entrega da DASN: 31 de maio de cada ano", category: "Obrigação" },
      { word: "RECEITA", hint: "Total de valores recebidos por vendas ou serviços — sem dedução de custos", category: "Financeiro" },
      { word: "SIMEI", hint: "Sistema de recolhimento simplificado onde o MEI está enquadrado", category: "Sistema" },
      { word: "EXCLUSAO", hint: "Consequência de ultrapassar o limite de faturamento — saída compulsória do regime MEI", category: "Consequência" },
    ],
    quiz: [
      {
        question: "Qual é o prazo para entrega da DASN-SIMEI?",
        options: ["31 de março", "30 de abril", "31 de maio", "30 de junho"],
        correctIndex: 2,
        explanation: "A DASN-SIMEI deve ser entregue anualmente até o dia 31 de maio do ano seguinte ao período declarado.",
      },
      {
        question: "Qual é a multa mínima por não entregar a DASN no prazo?",
        options: ["R$ 20,00", "R$ 50,00", "R$ 100,00", "R$ 200,00"],
        correctIndex: 1,
        explanation: "A multa mínima por atraso na entrega da DASN-SIMEI é de R$ 50,00, mesmo que o MEI não tenha tido receita no período.",
      },
      {
        question: "O que deve ser informado na DASN-SIMEI?",
        options: [
          "Despesas e custos do ano",
          "Receita bruta do ano e se houve empregado",
          "Lucro líquido e investimentos",
          "Somente o número de clientes atendidos",
        ],
        correctIndex: 1,
        explanation: "Na DASN são informadas: a receita bruta separada por tipo (serviços/comércio) e se o MEI contratou empregado durante o ano.",
      },
      {
        question: "MEI que faturou R$ 88.000 em 2024 (excesso de 8,6%) será excluído quando?",
        options: [
          "Imediatamente ao ultrapassar o limite",
          "A partir de 1º de janeiro do ano seguinte",
          "A partir do mês em que ultrapassou",
          "Somente se não pagar o DAS",
        ],
        correctIndex: 1,
        explanation: "Excesso de até 20% do limite (até R$ 97.200): o MEI é excluído apenas no ano seguinte, com efeito retroativo a 1º de janeiro — menor impacto fiscal.",
      },
      {
        question: "O reembolso de despesas pagas pelo cliente entra na receita bruta da DASN?",
        options: [
          "Sim, sempre",
          "Sim, se for em dinheiro",
          "Não, não integra a receita bruta",
          "Depende do valor",
        ],
        correctIndex: 2,
        explanation: "Reembolso de despesas pagas pelo cliente NÃO integra a receita bruta. Receita bruta é apenas o valor recebido pelos serviços prestados ou produtos vendidos.",
      },
    ],
    glossario: [
      { term: "DASN-SIMEI", definition: "Declaração Anual Simplificada para o Microempreendedor Individual — entregue até 31 de maio de cada ano." },
      { term: "Receita Bruta", definition: "Total das vendas e serviços prestados no ano, sem dedução de custos, despesas ou impostos." },
      { term: "Retificadora", definition: "Nova DASN entregue para corrigir informações de uma declaração anterior — substitui automaticamente." },
      { term: "DASN de Extinção", definition: "DASN entregue após o encerramento do MEI, com prazo especial: último dia do mês seguinte à baixa." },
      { term: "Exclusão do SIMEI", definition: "Saída compulsória do regime MEI quando o faturamento ultrapassa o limite de R$ 81.000/ano." },
      { term: "Ano-calendário", definition: "Período de 1º de janeiro a 31 de dezembro — base para cálculo da receita bruta declarada na DASN." },
    ],
  },
  {
    id: "modulo4",
    title: "Módulo 4",
    subtitle: "Perguntas e Simulações",
    icon: "🧩",
    color: "orange",
    explanation: [],
    cronograma: [],
    forcaWords: [],
    quiz: [],
    glossario: [],
  },
];
