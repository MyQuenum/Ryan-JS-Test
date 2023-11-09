<template>
  <header class="font-marko" :class="headerClass">
    <span class="flex items-center gap-2 fixed z-10 top-12 left-8">
      <h1 class="font-bold text-[1.5rem]">Ticketora</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        />
      </svg>
    </span>
    <div :class="headerClass">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 fixed z-10 top-12 right-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  </header>
  <main class="w-full h-full">
    <section ref="sectionOne" id="one" class="bg-[#222222] pt-32 h-[150vh]">
      <div class="text-[9rem] uppercase font-bold leading-none text-white">
        <span
          >&emsp;&emsp;Your
          <span class="text-outline-white text-transparent">ticketing </span></span
        >
        <span class="pl-40"> solution</span>
      </div>
      <div class="flex gap-20 mt-8">
        <div class="w-1/2 pl-32">
          <span class="py-8 text-lg block text-[#d3d3d3]"
            >With Ticketora, you can easily manage ticket sales, attendee registration and
            event access control. We're here to make your event management journey as
            smooth as possible, providing you with innovative tools and solutions that
            transform your vision into successful, unforgettable experiences.</span
          >
          <div class="text-white text-2xl flex gap-2 items-center">
            <span>Try Ticketora Now!</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 hover:bg-white hover:rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="grid w-1/2 grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid justify-items-end items-center">
            <div>
              <img
                class="h-auto w-[200px]"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto w-[150px]"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-[276vw]">
      <div class="overflow-hidden sticky h-screen top-0">
        <div
          id="scrollSection"
          class="absolute top-0 h-full will-change-transform flex items-center"
        >
          <div ref="sectionTwo" id="two" class="h-screen w-screen flex">
            <div class="w-1/2 pt-36 pl-36">
              <span
                class="text-transparent text-outline-black absolute top-16 left-8 font-bold text-[14rem] opacity-10 leading-none"
                >About</span
              >
              <h2 class="text-[3rem]  font-semibold">About us</h2>
              <span class="py-8 mt-8 text-lg block font-thin"
                >Notre mission consiste à simplifier l'organisation de vos événements
                grâce à une technologie de pointe, des processus de billetterie fluides et
                une inscription en ligne sans souci. Nous vous permettons de donner vie à
                vos événements grâce à une planification efficace, des interfaces
                conviviales et des informations complètes basées sur les données.</span
              >
              <button class="bg-black text-lg text-white px-6 py-3 rounded-3xl font-bold">
                Learn more
              </button>
            </div>
            <div
              ref="slideDown"
              id="slideDown"
              class="w-1/2 flex justify-around pr-16 translate-y-[-200px]"
            >
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <div class="w-[2px] h-[300px] bg-black"></div>
                  <div class="w-3 h-3 bg-black"></div>
                </div>
                <span id="offers" class="text-[4rem] font-bold number">3</span>
                <span class="font-bold text-lg opacity-0 opaque"
                  >Offres personnalisables</span
                >
              </div>
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <div class="w-[2px] h-[260px] bg-black"></div>
                  <div class="w-3 h-3 bg-black"></div>
                </div>
                <span id="partnerships" class="text-[4rem] font-bold number">21</span>
                <span class="font-bold text-lg opacity-0 opaque">Partenariats</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <div class="w-[2px] h-[220px] bg-black"></div>
                  <div class="w-3 h-3 bg-black"></div>
                </div>
                <span class="text-[4rem] font-bold"
                  ><span class="opaque">+</span
                  ><span id="events" class="number">800</span></span
                >
                <span class="font-bold text-lg opacity-0 opaque"
                  >Evènements administrés</span
                >
              </div>
            </div>
          </div>
          <div
            ref="sectionThree"
            id="three"
            class="h-screen w-screen flex items-center gap-[300px] bg-[#222222]"
          >
            <div class="pl-36 relative">
              <h2 class="text-outline-white text-transparent text-[4rem] font-bold m-24">
                Nos offres
              </h2>
              <span
                class="text-transparent text-outline-green absolute top-[-50px] font-bold text-[10rem] opacity-10 leading-none m-12"
                >Nos offres</span
              >
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-32 h-32 text-green-200 opacity-40"
            >
              <path
                fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="h-screen w-screen flex bg-[#222222]">
            <div class="pt-36 pl-36 relative">
              <h2 class="text-outline-green text-transparent text-[4rem] font-bold m-24">
                Basique
              </h2>
              <span
                class="text-transparent text-outline-black absolute top-[100px] font-bold text-[10rem] opacity-10 leading-none m-12"
                >Nos offres</span
              >
            </div>
          </div>
          <div class="h-screen w-screen flex bg-[#222222]">
            <div class="pt-36 pl-36 relative">
              <h2 class="text-outline-green text-transparent text-[4rem] font-bold m-24">
                Business
              </h2>
              <span
                class="text-transparent text-outline-black absolute top-[100px] font-bold text-[10rem] opacity-10 leading-none m-12"
                >Nos offres</span
              >
            </div>
          </div>
          <div class="h-screen w-screen flex bg-[#222222]">
            <div class="pt-36 pl-36 relative">
              <h2 class="text-outline-green text-transparent text-[4rem] font-bold m-24">
                Business Premium
              </h2>
              <span
                class="text-transparent text-outline-black absolute top-[100px] font-bold text-[10rem] opacity-10 leading-none m-12"
                >Nos offres</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-[201vh]">
      <div ref="sectionFour" id="four" class="h-screen w-screen flex justify-between sticky top-0">
        <div class="w-1/2 pt-52 pl-36">
          <span
            class="text-transparent text-outline-black absolute top-36 left-8 font-bold text-[14rem] opacity-10 leading-none"
            >Services</span
          >
          <h2 class="text-[3rem] font-semibold">Services</h2>
          <span class="py-8 mt-8 text-lg block font-thin"
            >Services We love crafting beautiful, smart and inspired work that is focused
            on your business' goals and customers. We do this across multiple touch points
            to help you achieve your vision.</span
          >
          <button class="bg-black text-lg text-white px-6 py-3 rounded-3xl font-bold">
            Discover
          </button>
        </div>
        <div class="w-1/3 flex justify-around pr-16">
          <div class="flex flex-col items-center translate-y-[-20px]">
            <div class="flex flex-col items-center">
              <div ref="verticalLine4" class="w-[2px] bg-black"></div>
              <div class="w-3 h-3 bg-black"></div>
              <span ref="brandingTag" class="font-bold text-[2rem] opacity-0">Branding</span>
              <div ref="verticalLine6" class="w-[2px] bg-black"></div>
              <div ref="cube6" class="bg-black w-3"></div>
              <span ref="motionTag" class="font-bold text-[2rem] opacity-0">Motion</span>
            </div>
          </div>
          <div class="flex flex-col items-center translate-y-[-20px]">
            <div class="flex flex-col items-center">
              <div ref="verticalLine5" class="w-[2px] bg-black"></div>
              <div class="w-3 h-3 bg-black"></div>
              <span ref="strategyTag" class="font-bold text-[2rem] opacity-0">Strategy</span>
              <div ref="verticalLine7" class="w-[2px] bg-black"></div>
              <div ref="cube7" class="bg-black w-3"></div>
              <span ref="marketingTag" class="font-bold text-[2rem] opacity-0">Marketing</span>
            </div>
          </div>
        </div>
      </div>
      <div ref="indicator" class="w-3 h-3 bg-transparent"></div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sectionOne = ref(null);
const sectionTwo = ref(null);
const sectionThree = ref(null);
const sectionFour = ref(null);
const slideDown = ref(null);

const stickySection = ref(null);
const scrollPercentage = ref(null);

const verticalLine4 = ref(null);
const verticalLine5 = ref(null);
const verticalLine6 = ref(null);
const verticalLine7 = ref(null);
const cube6 = ref(null);
const cube7 = ref(null);
const indicator = ref(null);
const brandingTag = ref(null);
const strategyTag = ref(null);
const motionTag = ref(null);
const marketingTag = ref(null);

let headerClass = ref("");

onMounted(() => {
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "one") {
            // Changez la couleur de la police pour la section #one
            headerClass.value = "text-white";
          } else if (entry.target.id === "two") {
            // Changez la couleur de la police pour la section #two
            headerClass.value = "text-black";
          } else if (entry.target.id === "three") {
            headerClass.value = "text-green-400";
          }
        }
      });
    },
    {
      threshold: 0.5, // La section doit être à moitié visible
    }
  );

  window.addEventListener("scroll", () => {
    const sectionTwoRect = sectionTwo.value.getBoundingClientRect();
    const isVisible =
      sectionTwoRect.top < window.innerHeight && sectionTwoRect.bottom >= 0;

    // Calculez la translation en fonction de la visibilité
    const translateY = isVisible ? (sectionTwoRect.top / window.innerHeight) * 400 : 0;
    slideDown.value.style.transform = `translateY(${1 - translateY}px)`;

    const opaques = document.querySelectorAll(".opaque");

    opaques.forEach((element) => {
      element.style.opacity = isVisible ? 1 - translateY / 200 : 0;
    });

    const offsetTop = stickySection.value.parentElement.offsetTop;
    const scrollSection = document.querySelector("#scrollSection");
    scrollPercentage.value =
      ((window.scrollY - offsetTop) / window.innerHeight - 1) * 100;
    scrollSection.style.transform =
      scrollPercentage.value > 0
        ? `translate3d(${-scrollPercentage.value}vw, 0, 0)`
        : `translate3d(0, 0, 0)`;
  });

  headerObserver.observe(sectionOne.value);
  headerObserver.observe(sectionTwo.value);
  headerObserver.observe(sectionThree.value);

  stickySection.value = document.querySelector(".sticky");

  //Lenis smooth scroll

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  //gsap scroll trigger part
  gsap.registerPlugin(ScrollTrigger);

  const timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: sectionFour.value,
      start: 'top 75%',
      end: 'top top',
      scrub: true,
      markers: false
    }
  });

  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: sectionFour.value,
      start: 'top 75%',
      end: 'top top',
      scrub: true,
      markers: false
    }
  });

  const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top bottom',
      end: 'top 80%',
      scrub: true,
      markers: false
    }
  });

  const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 79%',
      end: 'top 60%',
      scrub: true,
      markers: false
    }
  });

  const timeline5 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 79%',
      end: 'top 60%',
      scrub: true,
      markers: false
    }
  });

  const timeline6 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 79%',
      end: 'top 60%',
      scrub: true,
      markers: false
    }
  });

  const timeline7 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 79%',
      end: 'top 40%',
      scrub: true,
      markers: false
    }
  });

  const timeline8 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 59%',
      end: 'top 55%',
      scrub: true,
      markers: false
    }
  });

  const timeline9 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 59%',
      end: 'top 55%',
      scrub: true,
      markers: false
    }
  });

  const timeline10 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 58%',
      end: 'top 40%',
      scrub: true,
      markers: false
    }
  });

  const timeline11 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 58%',
      end: 'top 40%',
      scrub: true,
      markers: false
    }
  });

  const timeline12 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 58%',
      end: 'top 40%',
      scrub: true,
      markers: false
    }
  });

  const timeline13 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 58%',
      end: 'top 40%',
      scrub: true,
      markers: false
    }
  });

  const timeline14 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 39%',
      end: 'top top',
      scrub: true,
      markers: false
    }
  });

  const timeline15 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 39%',
      end: 'top top',
      scrub: true,
      markers: false
    }
  });

  const timeline16 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 39%',
      end: 'top top',
      scrub: true,
      markers: false
    }
  });

  const timeline17 = gsap.timeline({
    scrollTrigger: {
      trigger: indicator.value,
      start: 'top 39%',
      end: 'top top',
      scrub: true,
      markers: false
    }
  });

  timeline1.to(verticalLine4.value, {height: '103vh'});

  timeline2.to(verticalLine5.value, {height: '92vh'});

  timeline3.to(verticalLine5.value, {height: '103vh'});

  timeline4.to(verticalLine4.value, {height: '92vh'});

  timeline5.to(verticalLine5.value, {height: '71vh'});

  timeline6.to(brandingTag.value, {opacity: 1});

  timeline7.to(strategyTag.value, {opacity: 1});

  timeline8.to(cube6.value, {height: '12px'});

  timeline9.to(cube7.value, {height: '12px'});

  timeline10.to(verticalLine4.value, {height: '70vh'});

  timeline11.to(verticalLine6.value, {height: '22vh'});

  timeline12.to(verticalLine5.value, {height: '49vh'});

  timeline13.to(verticalLine7.value, {height: '22vh'});

  timeline14.to(verticalLine4.value, {height: '40vh'});

  timeline15.to(verticalLine5.value, {height: '19vh'});

  timeline16.to(motionTag.value, {opacity: 1});

  timeline17.to(marketingTag.value, {opacity: 1});
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {});
  headerObserver.disconnect();
});
</script>

<style scoped>
#one {
  position: relative;
  z-index: 2;
}

#two {
  position: relative;
  z-index: 1;
}
</style>
