export interface SimulacaoPergunta {
  id: string;
  situacao: string;
  pergunta: string;
  alternativas: Record<string, string>;
  resposta_correta: string;
  explicacao: string;
}

export interface SimulacaoSecao {
  id: string;
  titulo: string;
  descricao: string;
  perguntas: SimulacaoPergunta[];
}

export const simulacaoQuiz: { titulo: string; descricao: string; secoes: SimulacaoSecao[] } = {
  titulo: "Quiz de Treinamento — Atendimento ao MEI no SEBRAE",
  descricao: "Situações-problema do cotidiano do cidadão. Prepare o atendente para reconhecer, orientar e resolver.",
  secoes: [
    {
      id: "S1",
      titulo: "Seção 1 — Introdução ao MEI",
      descricao: "Situações sobre quem pode ou não ser MEI, benefícios, limites e conceitos básicos",
      perguntas: [
        {
          id: "S1Q1",
          situacao: "Seu cliente chega ao SEBRAE e diz: 'Faço bolo em casa e vendo pelo WhatsApp. Minha vizinha disse que eu posso fazer um CNPJ baratinho. Como funciona isso?'",
          pergunta: "Como você deve iniciar o atendimento dessa cidadã?",
          alternativas: {
            A: "Explicar imediatamente como fazer a abertura do MEI e já iniciar o processo.",
            B: "Perguntar quanto ela fatura por mês e verificar se a atividade de produção de bolos está na lista de CNAEs permitidos ao MEI antes de prosseguir.",
            C: "Informar que venda de alimentos caseiros não pode ser MEI por questões sanitárias.",
            D: "Solicitar o CPF dela e já abrir o MEI, pois qualquer atividade comercial é permitida.",
          },
          resposta_correta: "B",
          explicacao:
            "Antes de qualquer abertura, é necessário confirmar DOIS critérios: (1) o faturamento esperado (até R$ 81.000/ano) e (2) se a atividade está listada nos CNAEs permitidos. Produção e venda de alimentos caseiros (confeitaria, por exemplo) geralmente tem CNAE permitido ao MEI, mas é obrigatório verificar. Nunca inicie o processo sem essa checagem.",
        },
        {
          id: "S1Q2",
          situacao: "Um senhor de 62 anos chega e diz: 'Sou aposentado pelo INSS e faço bico como eletricista. Meu filho falou que se eu virar MEI vou perder minha aposentadoria.'",
          pergunta: "O que você responde a ele?",
          alternativas: {
            A: "O filho está certo — ao virar MEI, o INSS cancela a aposentadoria por acúmulo de benefícios.",
            B: "A aposentadoria não é cancelada. O aposentado pode ser MEI normalmente, pois já cumpriu as exigências do INSS. O DAS pago como MEI pode até gerar benefícios adicionais para dependentes.",
            C: "Ele precisaria escolher entre a aposentadoria e o MEI, pois não é permitido receber os dois ao mesmo tempo.",
            D: "Só pode se a borracharia for uma ME ou EPP, não se for outro MEI.",
          },
          resposta_correta: "B",
          explicacao:
            "O aposentado pelo INSS pode ser MEI sem perder a aposentadoria. A contribuição do DAS como MEI, nesse caso, não aumenta o valor da aposentadoria já concedida, mas garante cobertura de benefícios para dependentes (pensão por morte, auxílio-reclusão). Não há vedação legal para aposentados serem MEI.",
        },
        {
          id: "S1Q3",
          situacao: "Uma jovem chega empolgada: 'Passei num concurso público municipal! Mas ainda quero manter minha loja no Instagram vendendo bijuterias. Posso continuar como MEI?'",
          pergunta: "Qual a orientação correta?",
          alternativas: {
            A: "Pode manter o MEI normalmente — a vedação vale apenas para servidores federais ativos.",
            B: "Deve encerrar o MEI imediatamente ao tomar posse, pois servidores públicos não podem ter empresa.",
            C: "Pode manter apenas se a loja for gerida por um familiar.",
            D: "Pode manter, mas deverá mudar para ME para não ter conflito de interesses.",
          },
          resposta_correta: "A",
          explicacao:
            "A vedação ao MEI se aplica apenas a servidores públicos FEDERAIS em atividade. Servidores estaduais e municipais podem ser MEI, desde que não haja vedação específica no estatuto do servidor do ente federativo ou conflito de interesse com o cargo. Orientar a checar o estatuto do município dela para garantir, mas em regra federal não há impedimento.",
        },
        {
          id: "S1Q4",
          situacao: "Um homem chega e diz: 'Tenho uma borracharia no nome da minha esposa. Posso abrir um MEI no meu nome também pra vender peças?'",
          pergunta: "O que você verifica e orienta?",
          alternativas: {
            A: "Pode abrir normalmente — o MEI dele é independente da empresa da esposa.",
            B: "Não pode ser MEI se for sócio ou administrador da empresa da esposa. Você deve perguntar se ele figura como sócio ou administrador no CNPJ da borracharia.",
            C: "Pode abrir, mas deverá comunicar à Receita Federal sobre os dois CNPJs.",
            D: "Só pode se a borracharia for uma ME ou EPP, não se for outro MEI.",
          },
          resposta_correta: "B",
          explicacao:
            "A vedação é específica: não pode ser MEI quem for SÓCIO ou ADMINISTRADOR de outra empresa. Se a borracharia estiver só no nome da esposa e ele não figurar como sócio/administrador, pode abrir o MEI. O atendente deve verificar o quadro societário da borracharia antes de prosseguir, consultando o CNPJ da empresa no portal da Receita.",
        },
        {
          id: "S1Q5",
          situacao: "Uma mulher pergunta: 'Fui demitida semana passada e estou recebendo seguro-desemprego. Posso abrir MEI agora ou tenho que esperar o benefício acabar?'",
          pergunta: "Como você a orienta?",
          alternativas: {
            A: "Deve esperar o seguro-desemprego terminar para só então abrir o MEI.",
            B: "Pode abrir o MEI durante o seguro-desemprego, mas deverá comunicar ao MTE, pois o benefício será cancelado a partir da data de abertura do CNPJ.",
            C: "Pode abrir o MEI sem nenhum impacto no seguro-desemprego.",
            D: "Seguro-desemprego e MEI são incompatíveis — precisará devolver as parcelas já recebidas.",
          },
          resposta_correta: "B",
          explicacao:
            "A abertura do MEI é incompatível com o seguro-desemprego a partir da data de abertura. O benefício é cancelado quando o trabalhador volta a exercer atividade, inclusive como MEI. Ela deve ser orientada a decidir: ou aguarda terminar o seguro e abre o MEI depois, ou abre o MEI agora e comunica ao Ministério do Trabalho para encerrar o benefício — evitando assim configurar fraude previdenciária.",
        },
        {
          id: "S1Q6",
          situacao: "Um rapaz diz: 'Sou advogado recém-formado. Posso abrir MEI para atender clientes particulares e economizar no imposto?'",
          pergunta: "Qual a orientação?",
          alternativas: {
            A: "Pode — advogado autônomo sem escritório pode ser MEI.",
            B: "Pode, desde que não esteja inscrito na OAB ainda.",
            C: "Não pode — atividade de advocacia é regulamentada pelo Conselho Federal da OAB e não consta na lista de CNAEs permitidos ao MEI.",
            D: "Pode, mas deverá pagar alíquota diferenciada de ISS por ser profissão liberal.",
          },
          resposta_correta: "C",
          explicacao:
            "Advocacia NÃO é atividade permitida ao MEI. Profissões que exigem inscrição em conselho de classe federal (OAB, CRM, CREA, CRC, CRO etc.) geralmente estão excluídas da lista de CNAEs do MEI. O advogado deverá optar por outra natureza jurídica — como profissional liberal (autônomo com RPA), ME no Simples Nacional ou sociedade de advogados — e contratar um contador para orientação.",
        },
        {
          id: "S1Q7",
          situacao: "Uma cliente chega preocupada: 'Abri o MEI há dois anos mas nunca paguei nada. Minha amiga disse que vou pagar multa e perder tudo. É verdade?'",
          pergunta: "Como você descreve a situação real dela?",
          alternativas: {
            A: "Ela perdeu todos os direitos e precisa fechar o MEI e abrir um novo.",
            B: "Provavelmente seu MEI foi excluído do SIMEI por inadimplência, mas isso não significa que as dívidas sumiram. Ela deve regularizar os DAS em atraso e verificar se ainda pode reativar o enquadramento.",
            C: "Não tem problema — o governo perdoa dívidas do MEI automaticamente após 2 anos.",
            D: "A dívida de 2 anos prescreveu, então ela não precisa pagar nada.",
          },
          resposta_correta: "B",
          explicacao:
            "Após meses de inadimplência, o MEI geralmente recebe notificação de exclusão do SIMEI. Isso não cancela o CNPJ nem extingue as dívidas — apenas retira o benefício do regime simplificado. O atendente deve: consultar a situação do CNPJ, verificar quais DAS estão em aberto, emitir os DAS com multa e juros pelo PGMEI e, se aplicável, verificar se há prazo para impugnar a exclusão ou solicitar reenquadramento.",
        },
        {
          id: "S1Q8",
          situacao: "Um pai pergunta: 'Meu filho tem 16 anos e já faz freelas de design. Ele pode abrir um MEI?'",
          pergunta: "O que você responde?",
          alternativas: {
            A: "Pode, desde que seja autorizado pelos pais e registrado como menor empreendedor.",
            B: "Não pode — para ser MEI é necessário ter 18 anos completos ou ser emancipado legalmente.",
            C: "Pode a partir dos 16 anos, que é a maioridade civil para fins trabalhistas.",
            D: "Pode, mas o CNPJ ficará no CPF do pai até o filho completar 18 anos.",
          },
          resposta_correta: "B",
          explicacao:
            "O MEI exige capacidade civil plena, que no Brasil é adquirida aos 18 anos ou por emancipação. A maioridade trabalhista (16 anos) não se aplica para abertura de empresa. Se o jovem for emancipado legalmente (registro em cartório), pode abrir o MEI. Caso contrário, até os 18 anos, a alternativa é trabalhar como prestador autônomo com RPA emitido pelos contratantes.",
        },
        {
          id: "S1Q9",
          situacao: "Uma mulher diz: 'Fui MEI por 3 anos e faturei bem. Tive que mudar para ME. Agora meu negócio reduziu muito. Posso voltar a ser MEI?'",
          pergunta: "Qual é a regra para retorno ao MEI?",
          alternativas: {
            A: "Pode voltar a ser MEI a qualquer momento se o faturamento baixou.",
            B: "Não pode voltar nunca — quem sai do MEI perde o direito para sempre.",
            C: "Pode solicitar o reenquadramento no MEI no início do ano seguinte, se o faturamento do ano anterior estiver dentro do limite de R$ 81.000 e a atividade for permitida.",
            D: "Pode voltar, mas terá que abrir um CNPJ novo — o CNPJ anterior não pode ser reativado como MEI.",
          },
          resposta_correta: "C",
          explicacao:
            "É possível retornar ao MEI, mas pela lógica do Simples Nacional, a opção e o enquadramento são feitos no início de cada ano (janeiro). Se no ano anterior o faturamento ficou dentro do limite do MEI e a atividade é permitida, ela pode solicitar o reenquadramento como MEI para o ano seguinte. O atendente deve verificar o histórico de receita e orientar sobre o prazo de solicitação.",
        },
        {
          id: "S1Q10",
          situacao: "Um motorista de caminhão pergunta: 'Ouvi falar que caminhoneiro pode ser MEI com limite maior. Isso é verdade? Quanto posso faturar?'",
          pergunta: "Como você explica o MEI-Caminhoneiro?",
          alternativas: {
            A: "Não existe diferenciação — todos os MEIs têm o mesmo limite de R$ 81.000/ano.",
            B: "Existe o MEI-Caminhoneiro com limite de R$ 251.600/ano, criado para transportadores autônomos de cargas. O DAS também tem alíquota diferenciada de INSS (12% do salário mínimo em vez de 5%).",
            C: "O limite do caminhoneiro é de R$ 150.000/ano — é um valor intermediário entre MEI e ME.",
            D: "Caminhoneiro não pode ser MEI — deve abrir como Transportador Autônomo com RNTRC.",
          },
          resposta_correta: "B",
          explicacao:
            "O MEI-Caminhoneiro foi criado pela LC nº 188/2021 para transportadores autônomos de carga. Tem limite de R$ 251.600/ano e paga 12% do salário mínimo de INSS (em vez de 5%), além dos tributos estaduais/municipais aplicáveis. O CNAE deve ser de transporte de cargas. O motorista de aplicativo de passageiros (Uber/99) segue o MEI convencional, com regras diferentes.",
        },
      ],
    },
    {
      id: "S2",
      titulo: "Seção 2 — Formalização e DAS",
      descricao: "Situações sobre abertura, documentos, alterações, emissão e pagamento do DAS",
      perguntas: [
        {
          id: "S2Q1",
          situacao: "Um cliente chega irritado: 'Tentei abrir meu MEI pelo celular mas travou na hora de fazer login. O sistema pediu uma conta gov.br. O que é isso? Não tenho isso.'",
          pergunta: "Como você resolve essa situação no atendimento?",
          alternativas: {
            A: "Abrir o MEI diretamente pelo sistema do SEBRAE sem precisar de conta gov.br.",
            B: "Explicar que a conta gov.br é o login unificado do governo federal, orientar a criar no momento do atendimento usando CPF + biometria facial pelo app ou título de eleitor, e só então prosseguir com a abertura do MEI.",
            C: "Informar que ele precisará trazer certidão de nascimento e comprovante de residência para o SEBRAE abrir em seu nome.",
            D: "Orientar que procure um cartório para fazer um procuração antes de qualquer ação.",
          },
          resposta_correta: "B",
          explicacao:
            "A conta gov.br é obrigatória para abertura do MEI pelo Portal do Empreendedor. O atendente pode auxiliar o cliente a criar a conta no momento do atendimento. Os métodos de validação incluem: app gov.br com reconhecimento facial, uso do internet banking de bancos credenciados, ou validação por título de eleitor + dados pessoais. A conta precisa atingir nível PRATA no mínimo para formalização do MEI.",
        },
        {
          id: "S2Q2",
          situacao: "Uma manicure quer abrir seu MEI mas diz: 'Moro de aluguel e a caseira disse que não me deixa colocar empresa no endereço dela. O que faço?'",
          pergunta: "Qual orientação correta para o endereço do MEI?",
          alternativas: {
            A: "Ela pode colocar o endereço de um familiar ou amigo que concorde.",
            B: "Não é possível abrir o MEI sem o endereço do próprio domicílio.",
            C: "Verificar a legislação municipal — muitas prefeituras permitem o registro de MEI no endereço residencial por lei de home office, mesmo em imóvel alugado. Se a lei municipal permitir, a autorização da proprietária não é exigida pelo Portal. Caso contrário, verificar se há endereço comercial possível.",
            D: "Pode usar o endereço do SEBRAE como sede do MEI temporariamente.",
          },
          resposta_correta: "C",
          explicacao:
            "A LC 123/2006 e legislações municipais preveem a possibilidade de registro do MEI no endereço residencial. Em muitos municípios, a lei de desenvolvimento econômico permite isso sem necessidade de autorização do locador. O atendente deve verificar a legislação do município em questão. Se não houver tal permissão, alternativas são: coworking, endereço de familiar ou endereço comercial.",
        },
        {
          id: "S2Q3",
          situacao: "'Abri meu MEI semana passada como vendedora de roupas. Mas agora quero também oferecer serviço de customização (pintura em tecido). Tenho que abrir outro CNPJ?'",
          pergunta: "Como você orienta essa cliente?",
          alternativas: {
            A: "Sim, cada atividade exige um CNPJ diferente.",
            B: "Não — ela pode incluir a nova atividade no mesmo MEI fazendo uma alteração cadastral pelo Portal do Empreendedor, adicionando o CNAE correspondente à customização/pintura em tecido.",
            C: "Pode adicionar, mas terá que pagar um DAS extra por cada atividade adicional.",
            D: "Terá que fechar o MEI atual e abrir um novo com as duas atividades inclusas.",
          },
          resposta_correta: "B",
          explicacao:
            "O MEI pode ter múltiplos CNAEs — até 15 atividades permitidas — sem precisar de um novo CNPJ. A inclusão de nova atividade é feita pelo Portal do Empreendedor (gov.br/mei) em 'Alterar MEI', gratuitamente e instantaneamente. O DAS não muda de valor por conta da quantidade de atividades, apenas pelo tipo (comércio/serviço/ambos). O atendente deve verificar se o CNAE de customização está na lista permitida.",
        },
        {
          id: "S2Q4",
          situacao: "Um senhor chega confuso: 'Recebi uma carta da Receita Federal dizendo que meu MEI foi excluído. Mas eu nunca recebi nenhuma notificação antes. O que devo fazer agora?'",
          pergunta: "Qual é a conduta correta do atendente?",
          alternativas: {
            A: "Orientar a abrir um novo MEI imediatamente, pois o CNPJ excluído não pode ser reativado.",
            B: "Verificar a data da exclusão e o motivo (geralmente inadimplência de DAS ou DASN). Se ainda estiver dentro do prazo de defesa/recurso, orientar a regularizar e impugnar. Se o prazo passou, verificar possibilidade de reenquadramento ou novo registro.",
            C: "Informar que a exclusão é irreversível e que ele deverá procurar um contador para resolver.",
            D: "Pedir que ele ignore a carta, pois cartas da Receita sobre MEI são geralmente alertas sem efeito imediato.",
          },
          resposta_correta: "B",
          explicacao:
            "A exclusão do SIMEI tem etapas: notificação, prazo para defesa/regularização e efetivação. O atendente deve verificar: qual o motivo (DAS em atraso, excesso de receita, DASN não entregue), em que fase está o processo e se ainda há prazo para regularização. Se regularizar dentro do prazo, a exclusão pode ser cancelada. Se já efetivada, o caminho é novo enquadramento no início do ano seguinte, após regularização dos débitos.",
        },
        {
          id: "S2Q5",
          situacao: "'Meu MEI está no meu nome mas quero transferir para o nome do meu sócio. Como faço?' — pergunta um cliente.",
          pergunta: "O que você explica sobre essa solicitação?",
          alternativas: {
            A: "A transferência é feita pelo Portal do Empreendedor em menos de 10 minutos.",
            B: "O MEI não pode ter sócios e também não pode ser transferido para outra pessoa. O CNPJ do MEI é vinculado ao CPF do titular. Para o sócio ter CNPJ, ele precisará abrir o próprio MEI (se elegível) ou constituir uma sociedade, que seria uma natureza jurídica diferente.",
            C: "É possível transferir mediante procuração reconhecida em cartório.",
            D: "A transferência é proibida, mas ele pode colocar o sócio como administrador do MEI.",
          },
          resposta_correta: "B",
          explicacao:
            "O MEI é inseparável do CPF do titular — é literalmente o empresário individual. Não existe transferência de CNPJ do MEI. Se dois trabalhadores querem atuar juntos formalmente, as alternativas são: (1) cada um abre seu próprio MEI para serviços individuais, ou (2) constituem uma sociedade (como uma ME ou Sociedade Simples), o que exige contabilidade. Oriente o cliente sobre essas opções.",
        },
        {
          id: "S2Q6",
          situacao: "Uma cliente diz: 'Perdi meu boleto do DAS deste mês. Já paguei uma vez e quero ter certeza que não vou pagar de novo. Como resolvo?'",
          pergunta: "Como você a orienta?",
          alternativas: {
            A: "Ela pode emitir um novo DAS sem risco — o PGMEI verifica se já há pagamento no sistema e bloqueia duplicidade.",
            B: "Emitir nova 2ª via pelo PGMEI ou App MEI. O sistema pode mostrar 'já pago' se o pagamento foi processado, ou emitir o boleto normalmente se ainda estiver pendente. Depois de pagar, aguardar 3 dias úteis para processamento e confirmar no Extrato do Simples Nacional.",
            C: "Deve comparecer a uma agência bancária para solicitar o histórico de pagamentos antes de emitir nova via.",
            D: "Não é possível emitir 2ª via — ela precisará aguardar o próximo mês para regularizar.",
          },
          resposta_correta: "B",
          explicacao:
            "O DAS pode ser reemitido quantas vezes necessário pelo PGMEI (Simples Nacional) ou App MEI — não há risco de gerar duplicidade de cobrança. Se ela já pagou, o sistema pode informar 'competência já paga'. Se ainda não constar como pago, ela pode pagar normalmente. Para segurança, oriente a consultar o Extrato do Simples Nacional para confirmar o registro do pagamento (pode levar até 3 dias úteis para aparecer).",
        },
        {
          id: "S2Q7",
          situacao: "'Fui fazer meu DAS e o valor estava diferente do mês passado — ficou mais caro. Não entendo por quê.' — reclama um cliente.",
          pergunta: "Qual a explicação mais provável?",
          alternativas: {
            A: "O sistema cobrou indevidamente — o valor do DAS é fixo e nunca muda.",
            B: "O valor do DAS acompanha o salário mínimo (a parcela do INSS é 5% do salário mínimo), então quando o salário mínimo é reajustado, o DAS também sobe. Além disso, DAS em atraso inclui multa e juros automaticamente.",
            C: "O MEI foi autuado por alguma irregularidade e está pagando multa extra.",
            D: "Significa que ele ultrapassou o limite de faturamento e está sendo cobrado em alíquota maior.",
          },
          resposta_correta: "B",
          explicacao:
            "O valor do DAS NÃO é estático — a parcela do INSS é calculada como 5% do salário mínimo vigente. Quando o governo reajusta o salário mínimo (geralmente em janeiro), o DAS sobe proporcionalmente. Além disso, se o cliente acessou o sistema após o vencimento (dia 20), o valor já inclui multa (0,33%/dia, máximo 20%) e juros (SELIC). O atendente deve explicar essas duas causas e confirmar qual se aplica ao caso.",
        },
        {
          id: "S2Q8",
          situacao: "Um cliente pergunta: 'Fechei minha empresa faz uns 3 meses mas continuo recebendo cobranças de DAS pelo app. Isso é normal?'",
          pergunta: "O que você verifica e explica?",
          alternativas: {
            A: "É normal — o sistema continua enviando cobranças por 6 meses mesmo após o encerramento.",
            B: "Verificar se a baixa do MEI foi de fato concluída no Portal do Empreendedor. Se a baixa foi realizada corretamente, o sistema não deveria gerar DAS novos. Se a baixa não foi finalizada, o CNPJ ainda está ativo e os DAS continuam sendo gerados. Débitos anteriores à baixa persistem e devem ser pagos.",
            C: "As cobranças são erros do sistema — ele pode ignorar, pois a empresa está fechada.",
            D: "Após a baixa, ele tem 30 dias para pagar os DAS restantes e depois as cobranças cessam automaticamente.",
          },
          resposta_correta: "B",
          explicacao:
            "Se o cliente ainda recebe cobranças, a primeira verificação é se a baixa foi realmente concluída. Muitos MEIs acreditam que 'parar de pagar' encerra a empresa, mas não — a baixa precisa ser feita formalmente pelo Portal do Empreendedor. O atendente deve consultar a situação do CNPJ. Se ainda ativo, orientar sobre o processo de baixa. Se já baixado, verificar se são cobranças de competências anteriores à baixa, que permanecem válidas mesmo após o encerramento.",
        },
        {
          id: "S2Q9",
          situacao: "'Tenho 8 meses de DAS atrasados e não tenho dinheiro para pagar tudo de uma vez. Vou perder meu MEI?' — pergunta uma cliente preocupada.",
          pergunta: "Quais alternativas você apresenta a ela?",
          alternativas: {
            A: "Infelizmente não há como parcelar DAS do MEI — ela terá que pagar tudo de uma vez ou perder o MEI.",
            B: "O MEI pode parcelar débitos em aberto pelo portal do Simples Nacional em condições normais, e quando há programas como o PERT-SN, as condições ficam ainda mais facilitadas. Além disso, regularizar os débitos — mesmo parcelados — pode reverter ou evitar a exclusão do SIMEI.",
            C: "Ela deve declarar falência para que as dívidas sejam extintas.",
            D: "Pode pagar apenas os últimos 3 meses — os anteriores prescrevem automaticamente.",
          },
          resposta_correta: "B",
          explicacao:
            "O parcelamento de débitos do MEI/Simples Nacional é possível pelo portal do Simples Nacional (em condições regulares) e, em períodos específicos, por programas de parcelamento especiais como o PERT-SN, com condições diferenciadas. O atendente deve verificar se há programa aberto no momento, orientar o acesso ao portal e informar que regularizar — mesmo parcelado — conta para manutenção dos benefícios previdenciários e do enquadramento no SIMEI.",
        },
        {
          id: "S2Q10",
          situacao: "Um cliente diz: 'Acabei de abrir meu MEI mas o banco não aceitou o CCMEI para abrir conta. Disse que precisa de contrato social. O MEI não tem isso?'",
          pergunta: "Como você resolve essa situação?",
          alternativas: {
            A: "O cliente precisará de fato de um contrato social — orientar a mudar para ME.",
            B: "O CCMEI (Certificado da Condição de Microempreendedor Individual) é o documento equivalente ao contrato social para o MEI, conforme previsto em lei. O banco é obrigado a aceitar o CCMEI para abertura de conta PJ. Oriente o cliente a exigir atendimento de gerente e citar a Resolução BACEN e a LC 123/2006.",
            C: "O banco está correto — MEI não pode ter conta PJ, apenas conta PF.",
            D: "Orientar o cliente a imprimir o Cartão CNPJ junto com o CCMEI, pois essa combinação substitui o contrato social.",
          },
          resposta_correta: "B",
          explicacao:
            "O CCMEI tem força de contrato social por expressa previsão legal (LC 128/2008 e Resolução BACEN). Bancos são obrigados a aceitá-lo para abertura de conta PJ para MEI. Se o atendente do banco não souber, o MEI deve pedir para falar com o gerente e, se necessário, registrar reclamação no Banco Central (consumidor.gov.br). O atendente do SEBRAE pode ajudar o MEI a redigir um e-mail formal citando a legislação pertinente.",
        },
      ],
    },
    {
      id: "S3",
      titulo: "Seção 3 — DASN-SIMEI e Obrigações",
      descricao: "Situações sobre declaração anual, cálculo de receita, obrigações acessórias e consequências do descumprimento",
      perguntas: [
        {
          id: "S3Q1",
          situacao: "Uma cliente diz: 'Recebi um e-mail dizendo que preciso fazer a declaração do MEI. Mas eu já pago o DAS todo mês direitinho. Por que preciso fazer outra coisa ainda?'",
          pergunta: "Como você explica essa distinção?",
          alternativas: {
            A: "O e-mail é spam — quem paga o DAS regularmente não precisa fazer mais nada.",
            B: "O DAS e a DASN são obrigações separadas. O DAS é o pagamento mensal do imposto. A DASN-SIMEI é a declaração anual (como uma 'prestação de contas') onde ela informa quanto faturou no ano. São obrigações distintas e as duas são obrigatórias.",
            C: "A declaração só é obrigatória para quem tem empregado registrado.",
            D: "A declaração substituiu o DAS — quem entrega a DASN não precisa mais pagar o boleto mensal.",
          },
          resposta_correta: "B",
          explicacao:
            "Esta é uma das confusões mais comuns. DAS = pagamento (tributo). DASN = declaração (obrigação acessória). São independentes: pode pagar o DAS e não entregar a DASN (gerando multa), ou entregar a DASN sem pagar o DAS (gerando débito). Ambas são obrigatórias para todos os MEIs, independentemente de ter ou não empregado. O atendente deve usar essa analogia: 'É como o imposto de renda — você paga ao longo do ano e ainda precisa declarar no final'.",
        },
        {
          id: "S3Q2",
          situacao: "'Meu vizinho disse que a declaração do MEI só precisa ser feita uma vez, quando abre o CNPJ. Eu fiz na abertura e nunca mais precisei fazer.' — diz um cliente que tem MEI há 4 anos.",
          pergunta: "Como você avalia e age nessa situação?",
          alternativas: {
            A: "O vizinho está certo — a declaração de abertura é a única necessária.",
            B: "O vizinho está errado. A DASN-SIMEI é uma obrigação ANUAL, entregue todo ano até 31 de maio referente ao ano anterior. Se o cliente tem MEI há 4 anos e nunca entregou, provavelmente há 3 ou 4 DASNs pendentes, com multa de R$ 50,00 por declaração. É necessário regularizar.",
            C: "Depende do faturamento — se não faturou nada, está dispensado da declaração.",
            D: "A declaração passou a ser obrigatória apenas a partir de 2023 — antes era opcional.",
          },
          resposta_correta: "B",
          explicacao:
            "A DASN é obrigatória ANUALMENTE para todo MEI, independente de ter faturado ou não (inclusive se o faturamento foi R$ 0,00 — informa zerado). Com 4 anos de MEI sem entregar, o cliente provavelmente tem DASNs de 3 ou 4 anos pendentes. O atendente deve consultar quais anos estão pendentes, orientar a entrega de todas e informar que a multa mínima é R$ 50/declaração.",
        },
        {
          id: "S3Q3",
          situacao: "'Vou fazer a declaração do MEI, mas não sei quanto faturei no ano. Perdi todos os recibos. O que coloco no sistema?' — pergunta um pedreiro.",
          pergunta: "Como você o orienta a estimar/reconstruir o faturamento?",
          alternativas: {
            A: "Pode colocar R$ 0,00 para não ter problema com o fisco.",
            B: "Orientar que ele tente reconstruir o faturamento pelos registros disponíveis: extrato bancário da conta PJ, registros de Pix recebidos, conversas do WhatsApp com clientes, agenda de serviços. Declarar o valor mais próximo da realidade que conseguir reunir. Declarar R$ 0,00 quando houve faturamento real é falsidade ideológica e pode gerar autuação.",
            C: "Pode declarar o valor máximo permitido (R$ 81.000) para ficar na segurança.",
            D: "Deve aguardar até reconstituir todos os documentos — é melhor atrasar a entrega do que declarar valor impreciso.",
          },
          resposta_correta: "B",
          explicacao:
            "Declarar R$ 0,00 quando houve faturamento é falsidade ideológica tributária — pode gerar autuação futura. A orientação correta é reconstruir o faturamento com as evidências disponíveis: extratos bancários, histórico de Pix, registros de recibos emitidos, anotações em agenda etc. O valor declarado deve ser a melhor estimativa possível. Se depois descobrir discrepância, pode retificar a DASN.",
        },
        {
          id: "S3Q4",
          situacao: "Uma doceira diz: 'Fiz a declaração do MEI e o sistema disse que devo pagar uma diferença. Mas eu paguei o DAS todo mês! Por que ainda devo dinheiro?'",
          pergunta: "O que pode ter gerado essa diferença?",
          alternativas: {
            A: "É um erro do sistema — se pagou o DAS, não pode haver diferença.",
            B: "A diferença ocorre geralmente quando o MEI ultrapassa o limite de faturamento (R$ 81.000/ano). Nesse caso, sobre o excedente incidem tributos com alíquotas do Simples Nacional, gerando uma diferença a pagar. O DAS pago cobre apenas o valor fixo do regime, não o excedente.",
            C: "A diferença é referente ao ISS que o DAS não cobre.",
            D: "Significa que ela pagou o DAS com atraso em algum mês, gerando encargos extras que aparecem só na declaração.",
          },
          resposta_correta: "B",
          explicacao:
            "Quando a DASN é transmitida com receita bruta acima do limite do MEI (R$ 81.000), o sistema gera automaticamente a diferença tributária sobre o excedente, calculada com as alíquotas do Simples Nacional. Isso é diferente do DAS — o DAS é o valor fixo do regime; a diferença é o tributo adicional pelo excesso. O atendente deve verificar o valor total declarado, calcular o excesso e orientar sobre o pagamento.",
        },
        {
          id: "S3Q5",
          situacao: "Um MEI chega angustiado: 'Fiz a declaração errada — coloquei um valor bem menor do que ganhei de verdade. Já enviei. O que faço agora?'",
          pergunta: "Qual o procedimento correto?",
          alternativas: {
            A: "Não há solução — a declaração enviada é definitiva e não pode ser alterada.",
            B: "Ele deve transmitir uma DASN Retificadora pelo mesmo sistema (Simples Nacional → DASN-SIMEI → Retificar). A retificadora substitui automaticamente a declaração anterior. Se o valor correto for maior e gerar tributo adicional, ele deverá emitir e pagar o DAS correspondente com os acréscimos devidos.",
            C: "Deve aguardar a Receita Federal perceber o erro e enviar uma notificação.",
            D: "Deve entregar uma declaração corrigida em papel diretamente na Receita Federal mais próxima.",
          },
          resposta_correta: "B",
          explicacao:
            "A DASN Retificadora existe exatamente para corrigir erros na declaração original. O processo é idêntico ao da entrega original — acessar o portal, selecionar 'Retificar DASN', informar o período e transmitir com os valores corretos. Não há multa pela retificadora em si. Se o novo valor gerar tributo a pagar, o sistema exibirá o DAS correspondente com os acréscimos. O atendente deve orientar a retificação imediata — quanto mais cedo, menores os encargos.",
        },
        {
          id: "S3Q6",
          situacao: "'Fechei meu MEI em março deste ano. Tenho que fazer a declaração anual em maio também?' — pergunta um ex-MEI.",
          pergunta: "Qual a obrigação declaratória após a baixa?",
          alternativas: {
            A: "Não precisa — a baixa encerra automaticamente todas as obrigações.",
            B: "Sim. Ele tem duas obrigações: (1) a DASN-SIMEI regular (do ano anterior completo, até 31 de maio), e (2) a DASN de Extinção referente ao período de atividade no ano corrente (de janeiro até a data de baixa), com prazo até o último dia do mês seguinte ao da baixa.",
            C: "Só precisará entregar se tiver faturado algo após a baixa.",
            D: "Basta entregar a DASN normal em maio — não existe declaração de extinção.",
          },
          resposta_correta: "B",
          explicacao:
            "Após a baixa, há DUAS declarações a considerar: (1) a DASN regular, referente ao ano-calendário anterior completo (prazo até 31 de maio — igual para todos), e (2) a DASN de Extinção, referente ao período de atividade no ano da baixa (janeiro até a data de encerramento), cujo prazo é o ÚLTIMO DIA DO MÊS SEGUINTE à data de baixa. Exemplo: baixa em março/2025 → DASN de Extinção até 30 de abril/2025.",
        },
        {
          id: "S3Q7",
          situacao: "Uma cliente que vende produtos pelo Mercado Livre pergunta: 'Recebi R$ 50.000 pelo Mercado Livre no ano, mas eles já retiveram R$ 3.000 de comissão. Declaro os R$ 47.000 ou os R$ 50.000?'",
          pergunta: "O que você orienta sobre a base da declaração?",
          alternativas: {
            A: "Declara R$ 47.000 — o que importa é o que entrou na sua conta.",
            B: "Declara R$ 50.000 — a receita bruta é o valor total das vendas, antes das deduções de taxas e comissões de plataformas. As taxas do Mercado Livre são despesa operacional, não dedução da receita bruta para fins do MEI.",
            C: "Pode declarar qualquer um dos dois valores — a Receita Federal não tem como verificar.",
            D: "Declara R$ 47.000, pois o Mercado Livre já reteve e repassou os tributos ao governo.",
          },
          resposta_correta: "B",
          explicacao:
            "A receita bruta para fins do MEI e do SIMEI é o valor TOTAL das vendas/serviços, ANTES de qualquer dedução. As comissões e taxas de plataformas (Mercado Livre, Shopee, iFood, Elo7 etc.) são despesas operacionais — não reduzem a receita bruta declarada. O atendente deve deixar claro: 'Você vendeu R$ 50.000 — essa é sua receita. O que a plataforma cobrou é seu custo de vendas.'",
        },
        {
          id: "S3Q8",
          situacao: "'Tenho uma funcionária registrada. O que preciso fazer no final do ano por causa dela? A declaração do MEI muda alguma coisa?' — pergunta um barbeiro.",
          pergunta: "Quais obrigações relacionadas ao empregado devem ser informadas?",
          alternativas: {
            A: "Nenhuma obrigação extra — o MEI com empregado funciona igual ao sem empregado.",
            B: "Além de marcar 'SIM' para empregado na DASN, o MEI com empregado tem obrigações trabalhistas contínuas: recolhimento mensal do FGTS (8% do salário + 0,5% seguro-acidentes), INSS patronal (3% do salário), entrega da RAIS anualmente e eSocial simplificado para MEI.",
            C: "Apenas marcar 'SIM' na DASN — as demais obrigações trabalhistas não se aplicam ao MEI.",
            D: "O MEI com empregado deve entregar a GFIP mensalmente, como qualquer empresa.",
          },
          resposta_correta: "B",
          explicacao:
            "O MEI com empregado tem um conjunto de obrigações trabalhistas que vão além da DASN: (1) FGTS: 8% do salário + 0,5% seguro de acidente; (2) INSS patronal: 3% do salário; (3) RAIS: entregue anualmente; (4) eSocial Simplificado: cadastro e eventos de admissão, folha e demissão. O empregado do MEI segue a CLT normalmente.",
        },
        {
          id: "S3Q9",
          situacao: "Um jovem que faz freelas de design diz: 'No ano passado fiz R$ 30.000 fazendo design, mas também trabalhei 6 meses com carteira assinada e recebi mais R$ 20.000 de salário. Declaro os R$ 50.000 no MEI?'",
          pergunta: "O que compõe a receita bruta para a DASN-SIMEI?",
          alternativas: {
            A: "Sim — tudo que recebeu no ano precisa ser declarado no MEI.",
            B: "Não — a receita bruta do MEI é apenas o que ele recebeu pelo exercício da sua atividade como MEI (R$ 30.000 de design). O salário de emprego formal (R$ 20.000) é rendimento de pessoa física, declarado no Imposto de Renda da pessoa física, não na DASN.",
            C: "Deve declarar apenas o maior valor — nesse caso, R$ 30.000.",
            D: "Como teve carteira assinada, está dispensado de entregar a DASN do MEI.",
          },
          resposta_correta: "B",
          explicacao:
            "A DASN-SIMEI contempla APENAS as receitas obtidas pelo exercício da atividade do MEI. Rendimentos de vínculo empregatício (salário, 13º, férias) são tributados na fonte pelo empregador e declarados no IRPF — não entram na DASN do MEI. O atendente deve esclarecer que ter carteira assinada não impede ter MEI simultaneamente e que as declarações são independentes.",
        },
        {
          id: "S3Q10",
          situacao: "'Ouvi que se eu não entregar a declaração do MEI, meu CPF fica sujo. É verdade?' — pergunta uma cliente preocupada.",
          pergunta: "Como você esclarece as consequências reais da não entrega da DASN?",
          alternativas: {
            A: "Sim — a não entrega da DASN vai diretamente para o SPC/Serasa e suja o CPF.",
            B: "O CPF não é negativado diretamente por não entregar a DASN, mas as consequências são sérias: multa mínima de R$ 50,00 por declaração, possibilidade de exclusão do SIMEI após notificações, CNPJ com pendência que impede emissão de certidões negativas e pode dificultar acesso a crédito, licitações e contratos com empresas.",
            C: "Não há nenhuma consequência prática — a DASN é apenas uma formalidade opcional.",
            D: "Apenas gera uma multa simbólica de R$ 10,00 que pode ser paga a qualquer momento.",
          },
          resposta_correta: "B",
          explicacao:
            "A não entrega da DASN NÃO negativada o CPF nos bureaus de crédito (SPC/Serasa) diretamente, mas gera consequências importantes: (1) Multa de R$ 50,00 por declaração em atraso; (2) CNPJ com pendência — impossibilita emissão de Certidão Negativa de Débitos; (3) Risco de exclusão do SIMEI por descumprimento de obrigação acessória; (4) Dificuldade em comprovar situação fiscal para abrir conta PJ ou fazer financiamentos. O atendente deve desmistificar o 'CPF sujo' mas reforçar as consequências reais.",
        },
      ],
    },
  ],
};
