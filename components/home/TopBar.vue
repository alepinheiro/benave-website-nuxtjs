<template>
  <nav class="sticky top-0 z-10 px-2 pt-2">
    <div
      class="mx-auto h-full w-full max-w-7xl rounded-xl bg-white px-6 py-2 text-primary shadow-md">
      <div class="flex flex-row items-center justify-between">
        <TheLogo type="full" class="w-fit" width="150" height="48" />
        <div class="flex flex-row items-center gap-4">
          <Icon
            :name="$t('icons.whatsapp')"
            class="h-8 w-8 shrink-0 md:hidden" />
          <Drawer>
            <DrawerTrigger as-child>
              <Button size="icon" variant="ghost">
                <Icon
                  :name="$t('icons.menu')"
                  class="h-8 w-8 shrink-0 md:hidden" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div class="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>
                    <h3>
                      {{ $t('pages.home.topBar.menu.title') }}
                    </h3>
                  </DrawerTitle>
                  <DrawerDescription class="hidden">
                    Selecione uma opção do menu
                  </DrawerDescription>
                </DrawerHeader>

                <DrawerFooter>
                  <DrawerClose as-child>
                    <div class="">
                      <ul class="flex w-full flex-col">
                        <li v-for="item in Array(5).keys()" key="item">
                          <NuxtLink
                            :to="
                              $t(`pages.home.topBar.menu.links.${item + 1}.url`)
                            "
                            :external="true">
                            {{
                              $t(
                                `pages.home.topBar.menu.links.${item + 1}.label`,
                              )
                            }}
                          </NuxtLink>
                          <Separator class="my-4 w-full" />
                        </li>
                      </ul>
                    </div>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

          <div class="hidden flex-row gap-2 divide-x md:flex">
            <div
              v-for="item in Array(5).keys()"
              :key="item"
              class="min-w-24 lg:min-w-48">
              <div class="flex flex-row items-center justify-center">
                <NuxtLink
                  :to="$t(`pages.home.topBar.menu.links.${item + 1}.url`)"
                  :external="true"
                  class="mx-auto">
                  {{ $t(`pages.home.topBar.menu.links.${item + 1}.label`) }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
