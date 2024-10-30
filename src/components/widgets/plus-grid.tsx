import { component$, Slot } from '@builder.io/qwik';

export const PlusGrid = component$(({ class: className = '' }: { class?: string }) => {
  return <div class={className}><Slot /></div>;
});

export const PlusGridRow = component$(({ class: className = '' }: { class?: string }) => {
  return (
    <div
      class={`${className} group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]`}
    >
      <div
        aria-hidden="true"
        class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        <div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
        <div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
        <div class="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
        <div class="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
      </div>
      <Slot />
    </div>
  );
});

export const PlusGridItem = component$(({ class: className = '' }: { class?: string }) => {
  return (
    <div class={`${className} group/item relative`}>
      <PlusGridIcon
        placement="top left"
        class="hidden group-first/item:block"
      />
      <PlusGridIcon placement="top right" />
      <PlusGridIcon
        placement="bottom left"
        class="hidden group-last/row:group-first/item:block"
      />
      <PlusGridIcon
        placement="bottom right"
        class="hidden group-last/row:block"
      />
      <Slot />
    </div>
  );
});

export const PlusGridIcon = component$(
  ({ class: className = '', placement }: { class?: string; placement: `${'top' | 'bottom'} ${'right' | 'left'}` }) => {
    const [yAxis, xAxis] = placement.split(' ');

    const yClass = yAxis === 'top' ? '-top-2' : '-bottom-2';
    const xClass = xAxis === 'left' ? '-left-2' : '-right-2';

    return (
      <svg
        viewBox="0 0 15 15"
        aria-hidden="true"
        class={`${className} absolute size-[15px] fill-black/10 ${yClass} ${xClass}`}
      >
        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
      </svg>
    );
  }
);
