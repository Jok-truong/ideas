<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; /* PartiallyEnd: #3632/scriptSetup.vue */
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="border-b">
    <div class="flex h-16 items-center px-4">
      <!-- Logo -->
      <!-- Nav -->

      <div class="ml-auto">
        <nav class="flex items-center space-x-4 lg:space-x-6">
          <RouterLink
            to="/auth/login"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/auth/register"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Register
          </RouterLink>
          <RouterLink
            to="/category"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Categories
          </RouterLink>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                <Avatar class="h-8 w-8">
                  <AvatarImage src="/" alt="username" />
                  <AvatarFallback> username </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-56" align="end">
              <DropdownMenuLabel class="font-normal flex">
                <div class="flex flex-col space-y-1">
                  <p class="text-sm font-medium leading-none">username</p>
                  <p class="text-xs leading-none text-muted-foreground">
                    email
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <!-- <DropdownMenuItem @click="logout"> Log out </DropdownMenuItem> -->
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </div>
  </div>
</template>
