<template>
  <div class="relative">
    <div class="top-0 bg-primary pb-20">
      <div
        class="mx-auto hidden w-full max-w-7xl flex-row justify-end gap-2 px-2 py-4 text-white md:flex">
        <Icon :name="$t('icons.whatsapp')" class="h-8 w-8 shrink-0" />
        <Icon :name="$t('icons.instagram')" class="h-8 w-8 shrink-0" />
        <Icon :name="$t('icons.linkedin')" class="h-8 w-8 shrink-0" />
      </div>
    </div>
    <HomeTopBar class="-mt-20" />

    <section class="mx-auto max-w-7xl px-5 py-6 pb-12">
      <Tabs
        v-model="activeTab"
        default-value="privacy"
        class="gap-2 md:grid md:grid-cols-4"
        orientation="vertical">
        <TabsList class="mt-2 grid h-fit w-full grid-cols-1">
          <TabsTrigger value="#politica-de-privacidade">
            Política de Privacidade
          </TabsTrigger>
          <TabsTrigger value="#termos-de-uso"> Termos de Uso </TabsTrigger>
          <TabsTrigger value="#politica-de-cookies">
            Política de cookies
          </TabsTrigger>
          <TabsTrigger value="#acessibilidade"> Acessibilidade </TabsTrigger>
        </TabsList>

        <TabsContent value="#politica-de-privacidade" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Política de Privacidade</CardTitle>
              <CardDescription>
                Informações sobre a política de privacidade do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <h2 class="text-lg font-bold">1. Coleta de Dados Pessoais</h2>
              <p>
                O site BENAVÊ coleta dados pessoais de usuários de diversas
                formas, incluindo:
              </p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Dados fornecidos pelo usuário: </b>
                  Informações que você nos fornece ao entrar em contato conosco
                  através do botão do WhatsApp presente na landing page. Estes
                  dados podem incluir seu nome, número de telefone e informações
                  sobre seu interesse em nossos serviços.
                </li>
                <li>
                  <b> Dados coletados automaticamente: </b>
                  Quando você acessa nosso site, podemos coletar automaticamente
                  certas informações, como seu endereço IP, tipo de navegador,
                  páginas visitadas, horários de acesso e dados de cookies (ver
                  Política de Cookies abaixo).
                </li>
              </ul>

              <h2 class="text-lg font-bold">2. Uso de Dados Pessoais</h2>
              <p>
                Os dados pessoais coletados pelo site BENAVÊ são utilizados para
                as seguintes finalidades:
              </p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Comunicação e Atendimento: </b>
                  Utilizar seus dados de contato, especialmente o número de
                  WhatsApp, para responder a suas solicitações, dúvidas e
                  fornecer informações sobre nossos serviços.
                </li>
                <li>
                  <b> Melhora do Site: </b>
                  Analisar dados de navegação para entender como os usuários
                  interagem com o site, identificar áreas de melhoria e otimizar
                  a experiência do usuário.
                </li>
                <li>
                  <b> Marketing (com consentimento): </b>
                  Com o seu consentimento, podemos utilizar seus dados para
                  enviar comunicações de marketing sobre nossos serviços,
                  novidades e promoções. Você poderá revogar seu consentimento a
                  qualquer momento.
                </li>
                <li>
                  <b> Obrigações Legais: </b>
                  Cumprir obrigações legais e regulatórias aplicáveis ao site
                  BENAVÊ.
                </li>
              </ul>

              <h2 class="text-lg font-bold">
                3. Compartilhamento de Dados Pessoais
              </h2>
              <p>O site BENAVÊ poderá compartilhar seus dados pessoais com:</p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Parceiros de Negócios: </b>
                  Empresas parceiras que nos auxiliam na operação do site,
                  prestação de serviços e marketing, sempre em conformidade com
                  as leis de proteção de dados.
                </li>
                <li>
                  <b> Autoridades Públicas: </b>
                  Em cumprimento de obrigações legais ou ordens judiciais,
                  quando requisitado por autoridades competentes.
                </li>
              </ul>

              <h2 class="text-lg font-bold">4. Segurança de Dados Pessoais</h2>
              <p>
                O site BENAVÊ adota medidas de segurança técnicas e
                organizacionais para proteger seus dados pessoais contra acesso
                não autorizado, uso indevido, alteração ou destruição.
              </p>

              <h2 class="text-lg font-bold">5. Seus Direitos</h2>
              <p>
                Você possui os seguintes direitos em relação aos seus dados
                pessoais:
              </p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Acesso: </b>
                  Solicitar acesso aos seus dados pessoais que mantemos
                </li>
                <li>
                  <b> Retificação: </b>
                  Solicitar a correção de dados incompletos, inexatos ou
                  desatualizados.
                </li>
                <li>
                  <b> Eliminação: </b>
                  Solicitar a exclusão de seus dados pessoais, quando aplicável
                  e permitido por lei.
                </li>
                <li>
                  <b> Oposição: </b>
                  Opor-se ao tratamento de seus dados pessoais para finalidades
                  de marketing ou outras situações específicas.
                </li>
                <li>
                  <b> Portabilidade: </b>
                  Solicitar a portabilidade de seus dados a outro fornecedor de
                  serviço ou produto, quando aplicável.
                </li>
                <li>
                  <b> Revogação do Consentimento: </b>
                  Revogar o consentimento previamente concedido para o
                  tratamento de seus dados pessoais.
                </li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato conosco através do
                WhatsApp disponível no site.
              </p>

              <h2 class="text-lg font-bold">
                6. Alterações a esta Política de Privacidade
              </h2>
              <p>
                O site BENAVÊ poderá atualizar esta Política de Privacidade
                periodicamente. A versão mais recente estará sempre disponível
                no site.
              </p>

              <h2 class="text-lg font-bold">7. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
                tratamento de seus dados pessoais, entre em contato conosco
                através do WhatsApp disponível no site.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="#termos-de-uso" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Termos de Uso</CardTitle>
              <CardDescription>
                Informações sobre os termos de uso do site do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <h2 class="text-lg font-bold">1. Aceitação</h2>
              <p>
                Ao acessar ou utilizar o site BENAVÊ, você concorda com estes
                Termos de Uso em sua totalidade. Caso não concorde, por favor,
                não utilize o site.
              </p>

              <h2 class="text-lg font-bold">2. Uso do Site</h2>
              <p>
                O site BENAVÊ é destinado a fornecer informações sobre nossos
                serviços e facilitar o contato via WhatsApp para conversão de
                clientes. Você concorda em utilizar o site de forma responsável
                e em conformidade com a lei.
              </p>

              <h2 class="text-lg font-bold">3. Conteúdo do Blog</h2>
              <p>
                O blog do site BENAVÊ pode conter artigos, informações e
                opiniões sobre temas relacionados aos nossos serviços. O
                conteúdo do blog é meramente informativo e não constitui
                aconselhamento profissional. Não nos responsabilizamos pela
                precisão, integridade ou atualidade do conteúdo do blog.
              </p>

              <h2 class="text-lg font-bold">4. Propriedade Intelectual</h2>
              <p>
                O conteúdo do site BENAVÊ (textos, imagens, logotipos, etc.) é
                protegido por direitos de propriedade intelectual e pertence a
                PABLO YURI BENAVENUTO DOS SANTOS ou a terceiros que licenciaram
                o uso. É proibida a reprodução, distribuição ou utilização do
                conteúdo sem autorização prévia e por escrito.
              </p>

              <h2 class="text-lg font-bold">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                O site BENAVÊ é disponibilizado "no estado em que se encontra" e
                "conforme disponível". Não garantimos que o site estará sempre
                online, livre de erros ou interrupções. Não nos
                responsabilizamos por quaisquer danos diretos ou indiretos
                decorrentes do uso ou da impossibilidade de uso do site.
              </p>

              <h2 class="text-lg font-bold">
                6. Links para Sites de Terceiros
              </h2>
              <p>
                O site BENAVÊ pode conter links para sites de terceiros. Estes
                links são fornecidos apenas para sua conveniência. Não nos
                responsabilizamos pelo conteúdo, políticas de privacidade ou
                práticas de sites de terceiros.
              </p>

              <h2 class="text-lg font-bold">7. Alterações aos Termos de Uso</h2>
              <p>
                O site BENAVÊ poderá alterar estes Termos de Uso periodicamente.
                A versão mais recente estará sempre disponível no site.
              </p>

              <h2 class="text-lg font-bold">8. Lei Aplicável e Foro</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República
                Federativa do Brasil. Fica eleito o Foro da Comarca de
                Schroeder, SC, para dirimir quaisquer controvérsias decorrentes
                destes Termos de Uso, com renúncia expressa a qualquer outro,
                por mais privilegiado que seja.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="#politica-de-cookies" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Política de Cookies</CardTitle>
              <CardDescription>
                Informações sobre a política de cookies do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <h2 class="text-lg font-bold">1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto que são armazenados no
                seu dispositivo (computador, smartphone, tablet) quando você
                visita um site. Eles são amplamente utilizados para melhorar a
                experiência do usuário, personalizar conteúdo, analisar tráfego
                e fornecer funcionalidades diversas.
              </p>

              <h2 class="text-lg font-bold">
                2. Tipos de Cookies que Utilizamos
              </h2>
              <p>O site BENAVÊ utiliza os seguintes tipos de cookies:</p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Cookies Essenciais: </b>
                  Cookies necessários para o funcionamento básico do site, como
                  permitir a navegação nas páginas e o acesso a áreas seguras.
                  Sem estes cookies, o site pode não funcionar corretamente.
                </li>
                <li>
                  <b> Cookies de Desempenho: </b>
                  Cookies que coletam informações anônimas sobre como os
                  usuários utilizam o site, como páginas visitadas, tempo de
                  permanência e erros encontrados. Estes cookies nos ajudam a
                  melhorar o desempenho do site.
                </li>
                <li>
                  <b> Cookies de Funcionalidade: </b>
                  Cookies que permitem que o site se lembre de suas escolhas
                  (como idioma ou região) e ofereça funcionalidades
                  personalizadas.
                </li>
                <li>
                  <b> Cookies de Marketing: </b>
                  Cookies utilizados para rastrear sua visita ao site, as
                  páginas que você visitou e os links que você seguiu.
                  Utilizamos estas informações para exibir anúncios relevantes
                  aos seus interesses.
                </li>
              </ul>

              <h2 class="text-lg font-bold">3. Controle de Cookies</h2>
              <p>Você pode controlar e gerenciar cookies de diversas formas:</p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Configurações do Navegador: </b>
                  A maioria dos navegadores permite que você gerencie cookies
                  nas configurações. Você pode bloquear cookies, apagar cookies
                  existentes ou configurar seu navegador para alertá-lo quando
                  um cookie for enviado para seu dispositivo. Consulte a
                  documentação do seu navegador para obter mais informações.
                </li>
                <li>
                  <b> Ferramentas de Terceiros: </b>
                  Existem ferramentas de terceiros disponíveis que permitem
                  gerenciar cookies de forma mais granular.
                </li>
              </ul>

              <h2 class="text-lg font-bold">4. Cookies de Terceiros</h2>
              <p>
                O site BENAVÊ pode utilizar serviços de terceiros (como Google
                Analytics, plataformas de anúncios, etc.) que também utilizam
                cookies. Não temos controle sobre estes cookies de terceiros e
                recomendamos que você consulte as políticas de cookies destes
                terceiros para obter mais informações.
              </p>

              <h2 class="text-lg font-bold">
                5. Alterações a esta Política de Cookies
              </h2>
              <p>
                O site BENAVÊ poderá atualizar esta Política de Cookies
                periodicamente. A versão mais recente estará sempre disponível
                no site.
              </p>

              <h2 class="text-lg font-bold">6. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Cookies, entre em
                contato conosco através do WhatsApp disponível no site.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="#acessibilidade" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
              <CardDescription>
                Informações sobre a acessibilidade do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <h2 class="text-lg font-bold">
                Medidas de Acessibilidade Implementadas:
              </h2>
              <p>
                Estamos tomando as seguintes medidas para tornar o site BENAVÊ
                mais acessível:
              </p>
              <ul class="list-disc pl-5">
                <li>
                  <b> Texto Alternativo para Imagens: </b>
                  Forneceremos texto alternativo descritivo para todas as
                  imagens não decorativas, para que usuários com deficiência
                  visual possam entender o conteúdo das imagens através de
                  leitores de tela.
                </li>
                <li>
                  <b> Navegação por Teclado: </b>
                  Garantiremos que todas as funcionalidades do site possam ser
                  acessadas utilizando apenas o teclado, para usuários que não
                  podem utilizar o mouse.
                </li>
                <li>
                  <b> Contraste de Cores: </b>
                  Utilizaremos contraste de cores adequado para garantir que o
                  texto seja legível para usuários com baixa visão ou
                  daltonismo.
                </li>
                <li>
                  <b> Estrutura Semântica: </b>
                  Utilizaremos HTML semântico para estruturar o conteúdo do
                  site, facilitando a navegação e a compreensão por tecnologias
                  assistivas.
                </li>
                <li>
                  <b> Responsividade: </b>
                  O site será responsivo e adaptável a diferentes tamanhos de
                  tela e dispositivos, incluindo dispositivos móveis.
                </li>
              </ul>

              <h2 class="text-lg font-bold">Nível de Conformidade:</h2>
              <p>
                Estamos trabalhando para alcançar o nível de conformidade WCAG
                2.1 nível AA (Web Content Accessibility Guidelines).
              </p>

              <h2 class="text-lg font-bold">Limitações e Alternativas:</h2>
              <p>
                Apesar de nossos esforços, algumas áreas do site podem
                apresentar limitações de acessibilidade. Estamos trabalhando
                para solucionar estas questões e melhorar continuamente a
                acessibilidade do site. Se você encontrar alguma barreira de
                acessibilidade no site BENAVÊ, por favor, entre em contato
                conosco através do WhatsApp disponível no site para que possamos
                fornecer assistência e melhorar a acessibilidade do site.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>

    <LazyHomeTheFooter />
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();

  const activeTab = ref(route.hash ?? 'politica-de-privacidade');
</script>
