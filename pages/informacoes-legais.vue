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

    <section class="mx-auto max-w-7xl px-5 py-12">
      <Tabs
        default-value="privacy"
        class="gap-2 md:grid md:grid-cols-4"
        orientation="vertical">
        <TabsList class="mt-2 grid h-fit w-full grid-cols-1">
          <TabsTrigger value="privacy"> Política de Privacidade </TabsTrigger>
          <TabsTrigger value="terms-of-use"> Termos de Uso </TabsTrigger>
          <TabsTrigger value="cookies"> Política de cookies </TabsTrigger>
          <TabsTrigger value="accessibility"> Acessibilidade </TabsTrigger>
        </TabsList>

        <TabsContent value="privacy" class="col-span-3">
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

        <TabsContent value="terms-of-use" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Política de Privacidade</CardTitle>
              <CardDescription>
                Informações sobre a política de privacidade do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              1. Coleta de Dados Pessoais O site BENAVÊ coleta dados pessoais de
              usuários de diversas formas, incluindo: Dados fornecidos pelo
              usuário: Informações que você nos fornece ao entrar em contato
              conosco através do botão do WhatsApp presente na landing page.
              Estes dados podem incluir seu nome, número de telefone e
              informações sobre seu interesse em nossos serviços. Dados
              coletados automaticamente: Quando você acessa nosso site, podemos
              coletar automaticamente certas informações, como seu endereço IP,
              tipo de navegador, páginas visitadas, horários de acesso e dados
              de cookies (ver Política de Cookies abaixo). 2. Uso de Dados
              Pessoais Os dados pessoais coletados pelo site BENAVÊ são
              utilizados para as seguintes finalidades: Comunicação e
              Atendimento: Utilizar seus dados de contato, especialmente o
              número de WhatsApp, para responder a suas solicitações, dúvidas e
              fornecer informações sobre nossos serviços. Melhora do Site:
              Analisar dados de navegação para entender como os usuários
              interagem com o site, identificar áreas de melhoria e otimizar a
              experiência do usuário. Marketing (com consentimento): Com o seu
              consentimento, podemos utilizar seus dados para enviar
              comunicações de marketing sobre nossos serviços, novidades e
              promoções. Você poderá revogar seu consentimento a qualquer
              momento. Obrigações Legais: Cumprir obrigações legais e
              regulatórias aplicáveis ao site BENAVÊ. 3. Compartilhamento de
              Dados Pessoais O site BENAVÊ poderá compartilhar seus dados
              pessoais com: Parceiros de Negócios: Empresas parceiras que nos
              auxiliam na operação do site, prestação de serviços e marketing,
              sempre em conformidade com as leis de proteção de dados.
              Autoridades Públicas: Em cumprimento de obrigações legais ou
              ordens judiciais, quando requisitado por autoridades competentes.
              4. Segurança de Dados Pessoais O site BENAVÊ adota medidas de
              segurança técnicas e organizacionais para proteger seus dados
              pessoais contra acesso não autorizado, uso indevido, alteração ou
              destruição. 5. Seus Direitos Você possui os seguintes direitos em
              relação aos seus dados pessoais: Acesso: Solicitar acesso aos seus
              dados pessoais que mantemos. Retificação: Solicitar a correção de
              dados incompletos, inexatos ou desatualizados. Eliminação:
              Solicitar a exclusão de seus dados pessoais, quando aplicável e
              permitido por lei. Oposição: Opor-se ao tratamento de seus dados
              pessoais para finalidades de marketing ou outras situações
              específicas. Portabilidade: Solicitar a portabilidade de seus
              dados a outro fornecedor de serviço ou produto, quando aplicável.
              Revogação do Consentimento: Revogar o consentimento previamente
              concedido para o tratamento de seus dados pessoais. Para exercer
              seus direitos, entre em contato conosco através do WhatsApp
              disponível no site. 6. Alterações a esta Política de Privacidade O
              site BENAVÊ poderá atualizar esta Política de Privacidade
              periodicamente. A versão mais recente estará sempre disponível no
              site. 7. Contato Em caso de dúvidas sobre esta Política de
              Privacidade ou sobre o tratamento de seus dados pessoais, entre em
              contato conosco através do WhatsApp disponível no site.
            </CardContent>
            <!-- <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> -->
          </Card>
        </TabsContent>
        <TabsContent value="cookies" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Política de Privacidade</CardTitle>
              <CardDescription>
                Informações sobre a política de privacidade do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              1. Coleta de Dados Pessoais O site BENAVÊ coleta dados pessoais de
              usuários de diversas formas, incluindo: Dados fornecidos pelo
              usuário: Informações que você nos fornece ao entrar em contato
              conosco através do botão do WhatsApp presente na landing page.
              Estes dados podem incluir seu nome, número de telefone e
              informações sobre seu interesse em nossos serviços. Dados
              coletados automaticamente: Quando você acessa nosso site, podemos
              coletar automaticamente certas informações, como seu endereço IP,
              tipo de navegador, páginas visitadas, horários de acesso e dados
              de cookies (ver Política de Cookies abaixo). 2. Uso de Dados
              Pessoais Os dados pessoais coletados pelo site BENAVÊ são
              utilizados para as seguintes finalidades: Comunicação e
              Atendimento: Utilizar seus dados de contato, especialmente o
              número de WhatsApp, para responder a suas solicitações, dúvidas e
              fornecer informações sobre nossos serviços. Melhora do Site:
              Analisar dados de navegação para entender como os usuários
              interagem com o site, identificar áreas de melhoria e otimizar a
              experiência do usuário. Marketing (com consentimento): Com o seu
              consentimento, podemos utilizar seus dados para enviar
              comunicações de marketing sobre nossos serviços, novidades e
              promoções. Você poderá revogar seu consentimento a qualquer
              momento. Obrigações Legais: Cumprir obrigações legais e
              regulatórias aplicáveis ao site BENAVÊ. 3. Compartilhamento de
              Dados Pessoais O site BENAVÊ poderá compartilhar seus dados
              pessoais com: Parceiros de Negócios: Empresas parceiras que nos
              auxiliam na operação do site, prestação de serviços e marketing,
              sempre em conformidade com as leis de proteção de dados.
              Autoridades Públicas: Em cumprimento de obrigações legais ou
              ordens judiciais, quando requisitado por autoridades competentes.
              4. Segurança de Dados Pessoais O site BENAVÊ adota medidas de
              segurança técnicas e organizacionais para proteger seus dados
              pessoais contra acesso não autorizado, uso indevido, alteração ou
              destruição. 5. Seus Direitos Você possui os seguintes direitos em
              relação aos seus dados pessoais: Acesso: Solicitar acesso aos seus
              dados pessoais que mantemos. Retificação: Solicitar a correção de
              dados incompletos, inexatos ou desatualizados. Eliminação:
              Solicitar a exclusão de seus dados pessoais, quando aplicável e
              permitido por lei. Oposição: Opor-se ao tratamento de seus dados
              pessoais para finalidades de marketing ou outras situações
              específicas. Portabilidade: Solicitar a portabilidade de seus
              dados a outro fornecedor de serviço ou produto, quando aplicável.
              Revogação do Consentimento: Revogar o consentimento previamente
              concedido para o tratamento de seus dados pessoais. Para exercer
              seus direitos, entre em contato conosco através do WhatsApp
              disponível no site. 6. Alterações a esta Política de Privacidade O
              site BENAVÊ poderá atualizar esta Política de Privacidade
              periodicamente. A versão mais recente estará sempre disponível no
              site. 7. Contato Em caso de dúvidas sobre esta Política de
              Privacidade ou sobre o tratamento de seus dados pessoais, entre em
              contato conosco através do WhatsApp disponível no site.
            </CardContent>
            <!-- <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> -->
          </Card>
        </TabsContent>
        <TabsContent value="accessibility" class="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Política de Privacidade</CardTitle>
              <CardDescription>
                Informações sobre a política de privacidade do site
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              1. Coleta de Dados Pessoais O site BENAVÊ coleta dados pessoais de
              usuários de diversas formas, incluindo: Dados fornecidos pelo
              usuário: Informações que você nos fornece ao entrar em contato
              conosco através do botão do WhatsApp presente na landing page.
              Estes dados podem incluir seu nome, número de telefone e
              informações sobre seu interesse em nossos serviços. Dados
              coletados automaticamente: Quando você acessa nosso site, podemos
              coletar automaticamente certas informações, como seu endereço IP,
              tipo de navegador, páginas visitadas, horários de acesso e dados
              de cookies (ver Política de Cookies abaixo). 2. Uso de Dados
              Pessoais Os dados pessoais coletados pelo site BENAVÊ são
              utilizados para as seguintes finalidades: Comunicação e
              Atendimento: Utilizar seus dados de contato, especialmente o
              número de WhatsApp, para responder a suas solicitações, dúvidas e
              fornecer informações sobre nossos serviços. Melhora do Site:
              Analisar dados de navegação para entender como os usuários
              interagem com o site, identificar áreas de melhoria e otimizar a
              experiência do usuário. Marketing (com consentimento): Com o seu
              consentimento, podemos utilizar seus dados para enviar
              comunicações de marketing sobre nossos serviços, novidades e
              promoções. Você poderá revogar seu consentimento a qualquer
              momento. Obrigações Legais: Cumprir obrigações legais e
              regulatórias aplicáveis ao site BENAVÊ. 3. Compartilhamento de
              Dados Pessoais O site BENAVÊ poderá compartilhar seus dados
              pessoais com: Parceiros de Negócios: Empresas parceiras que nos
              auxiliam na operação do site, prestação de serviços e marketing,
              sempre em conformidade com as leis de proteção de dados.
              Autoridades Públicas: Em cumprimento de obrigações legais ou
              ordens judiciais, quando requisitado por autoridades competentes.
              4. Segurança de Dados Pessoais O site BENAVÊ adota medidas de
              segurança técnicas e organizacionais para proteger seus dados
              pessoais contra acesso não autorizado, uso indevido, alteração ou
              destruição. 5. Seus Direitos Você possui os seguintes direitos em
              relação aos seus dados pessoais: Acesso: Solicitar acesso aos seus
              dados pessoais que mantemos. Retificação: Solicitar a correção de
              dados incompletos, inexatos ou desatualizados. Eliminação:
              Solicitar a exclusão de seus dados pessoais, quando aplicável e
              permitido por lei. Oposição: Opor-se ao tratamento de seus dados
              pessoais para finalidades de marketing ou outras situações
              específicas. Portabilidade: Solicitar a portabilidade de seus
              dados a outro fornecedor de serviço ou produto, quando aplicável.
              Revogação do Consentimento: Revogar o consentimento previamente
              concedido para o tratamento de seus dados pessoais. Para exercer
              seus direitos, entre em contato conosco através do WhatsApp
              disponível no site. 6. Alterações a esta Política de Privacidade O
              site BENAVÊ poderá atualizar esta Política de Privacidade
              periodicamente. A versão mais recente estará sempre disponível no
              site. 7. Contato Em caso de dúvidas sobre esta Política de
              Privacidade ou sobre o tratamento de seus dados pessoais, entre em
              contato conosco através do WhatsApp disponível no site.
            </CardContent>
            <!-- <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> -->
          </Card>
        </TabsContent>
      </Tabs>
    </section>

    <LazyHomeTheFooter />
  </div>
</template>

<script lang="ts" setup></script>
