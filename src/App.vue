<template>
  <header class="font-marko" :class="headerClass">
    <span class="flex items-center gap-2 fixed z-10 top-6 left-8">
      <h1 class="font-bold text-[2rem]">Ticketora</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
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
        class="w-10 h-10 fixed z-10 top-6 right-8"
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
    <section ref="sectionOne" id="one" class="p-16 pl-36 pb-0 bg-green-400">
      <span class="text-[4rem] uppercase font-bold"
        >&emsp;&emsp;Gérez votre
        <span class="text-outline-white text-transparent">billeterie digitale</span> et
        vos
        <span class="text-outline-white text-transparent">inscriptions en ligne</span> en
        quelques clics</span
      >
      <div class="flex gap-20">
        <span class="py-4 text-lg block w-1/2 text-white"
          >Avec Ticketora, vous gérez facilement la vente de billets, les inscriptions des
          participants et le contrôle de l'accès à l'événement. Nous sommes là pour rendre
          votre parcours de gestion d'événements aussi fluide que possible, en vous
          fournissant des outils innovants et des solutions qui transforment votre vision
          en expériences réussies et inoubliables.</span
        >
        <div class="grid grid-cols-2 items-center gap-x-4 w-fit rotate-12">
          <img
            class="w-[200px] h-[200px] object-cover"
            src="src\assets\ticket2.png"
            alt=""
          /><img
            class="w-[200px] h-[200px] object-cover"
            src="src\assets\inscription.png"
            alt=""
          /><img
            class="w-[200px] h-[200px] object-cover"
            src="src\assets\billet.png"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="h-[285vw]">
      <div class="overflow-hidden sticky h-screen top-0">
        <div
          id="scrollSection"
          class="absolute top-0 h-full will-change-transform flex items-center"
        >
          <div ref="sectionTwo" id="two" class="h-screen w-screen flex">
            <div class="w-1/2 pt-36 pl-36">
              <h2 class="text-green-400 text-[4rem] font-bold">À propos de nous</h2>
              <span class="py-4 my-8 text-lg block"
                >Notre mission consiste à simplifier l'organisation de vos événements
                grâce à une technologie de pointe, des processus de billetterie fluides et
                une inscription en ligne sans souci. Nous vous permettons de donner vie à
                vos événements grâce à une planification efficace, des interfaces
                conviviales et des informations complètes basées sur les données.</span
              >
              <button class="bg-green-400 px-4 py-2 rounded-3xl font-bold">
                En savoir plus
              </button>
            </div>
            <div
              ref="slideDown"
              id="slideDown"
              class="w-1/2 flex justify-around pr-16 mt-[-200px]"
            >
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <div class="w-[2px] h-[300px] bg-black"></div>
                  <div class="w-3 h-3 bg-black"></div>
                </div>
                <span class="text-green-400 text-[4rem] font-bold">3</span>
                <span class="font-bold text-lg opacity-0 opaque"
                  >Offres personnalisables</span
                >
              </div>
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <div class="w-[2px] h-[260px] bg-black"></div>
                  <div class="w-3 h-3 bg-black"></div>
                </div>
                <span class="text-green-400 text-[4rem] font-bold">21</span>
                <span class="font-bold text-lg opacity-0 opaque">Partenariats</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <div class="w-[2px] h-[220px] bg-black"></div>
                  <div class="w-3 h-3 bg-black"></div>
                </div>
                <span class="text-green-400 text-[4rem] font-bold">+800</span>
                <span class="font-bold text-lg opacity-0 opaque"
                  >Evènements administrés</span
                >
              </div>
            </div>
          </div>
          <div
            ref="sectionThree"
            id="three"
            class="h-screen w-screen flex items-center gap-[300px] bg-[#222222] border-r-green-400 border-r-4"
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
          <div class="h-screen w-screen flex bg-green-200">
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
          <div class="h-screen w-screen flex bg-green-300">
            <div class="pt-36 pl-36 relative">
              <h2 class="text-outline-white text-transparent text-[4rem] font-bold m-24">
                Business
              </h2>
              <span
                class="text-transparent text-outline-black absolute top-[100px] font-bold text-[10rem] opacity-10 leading-none m-12"
                >Nos offres</span
              >
            </div>
          </div>
          <div class="h-screen w-screen flex bg-green-400">
            <div class="pt-36 pl-36 relative">
              <h2 class="text-outline-white text-transparent text-[4rem] font-bold m-24">
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
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sectionOne = ref(null);
const sectionTwo = ref(null);
const sectionThree = ref(null);
const slideDown = ref(null);

const stickySection = ref(null);
const scrollPercentage = ref(null);

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
    const translateY = isVisible ? (sectionTwoRect.top / window.innerHeight) * 200 : 0;
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
