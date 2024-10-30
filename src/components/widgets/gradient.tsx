import { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export const Gradient = component$((props: QwikIntrinsicElements['div']) => {
  return (
    <div
      {...props}
      class={`${props.className ?? ''} absolute lg:inset-2 bottom-0 h-[90vh] rounded-2xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]`}
    
    
    />
    

   
  );
});

export const GradientBackground = component$(() => {
    return (
        <div class="relative mx-auto max-w-7xl">
          <div
            class="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"
          />
        </div>
      );
    });