<template>
  <nav class="fixed z-10 w-full p-2">
    <div
      class="h-full w-full max-w-7xl rounded-xl bg-white px-6 py-2 text-primary shadow-md">
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
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription
                    >Set your daily activity goal.</DrawerDescription
                  >
                </DrawerHeader>

                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose as-child>
                    <Button variant="outline"> Cancel </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
