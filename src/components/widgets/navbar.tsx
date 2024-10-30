import { component$, useSignal, $, QRL } from '@builder.io/qwik';

import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';
import { Link } from '@builder.io/qwik-city';
import Logo from '../common/Logo';

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  { href: '/login', label: 'Login' },
];

export const DesktopNav = component$(() => {
  return (
    <nav class="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} class="relative flex">
          <Link
            href={href}
            class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%]"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  );
});

export const MobileNavButton = component$(({ toggleMenu }: { toggleMenu: QRL<() => void> }) => {
  return (
    <button
      onClick$={toggleMenu}
      class="flex size-12 items-center justify-center self-center rounded-lg hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 12h18v-2H3v2zm0 7h18v-2H3v2zm0-14v2h18V5H3z" />
      </svg>
    </button>
  );
});

export const MobileNav = component$(({ isOpen }: { isOpen: boolean }) => {
  return (
    <div class={isOpen ? 'block lg:hidden' : 'hidden'}>
      <div class="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <div
            key={href}
            style={{
              transition: 'opacity 0.15s ease-in-out, transform 0.3s ease-in-out',
              opacity: isOpen ? '1' : '0',
              transform: isOpen ? 'rotateX(0)' : 'rotateX(-90deg)',
              transitionDelay: `${linkIndex * 0.1}s`,
            }}
          >
            <Link href={href} class="text-base font-medium text-gray-950">
              {label}
            </Link>
          </div>
        ))}
      </div>
      <div class="absolute left-1/2 w-screen -translate-x-1/2">
        <div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
        <div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
      </div>
    </div>
  );
});

export const Navbar = component$(({ banner }: { banner?: any }) => {
  const isOpen = useSignal(false);

  const toggleMenu = $(() => {
    isOpen.value = !isOpen.value;
  });

  return (
    <header class="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow class="relative flex justify-between">
          <div class="relative flex gap-6">
            <PlusGridItem class="py-3">
              <Link href="/" title="Home">
                <Logo />
              </Link>
            </PlusGridItem>
            {banner && (
              <div class="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          {/* Pass the QRL function as a prop */}
          <MobileNavButton toggleMenu={toggleMenu} />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav isOpen={isOpen.value} />
    </header>
  );
});
