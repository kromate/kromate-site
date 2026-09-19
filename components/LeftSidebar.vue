<template>
  <nav
    aria-label="social links"
    class="fixed left-0 bottom-0 top-0 hidden md:flex flex-col items-center justify-between border-r border-[#8892b0] z-20 w-[60px] pb-10 pt-5 opacity-0 animate-fade-in-slide"
  >
    <div class="top-logo">
      <svg width="40" height="40" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover:text-[#ff8c00] hover:scale-110 transition-transform duration-300 cursor-pointer">
        <rect x="125.865" y="108.895" width="48" height="14" transform="rotate(-45 125.865 108.895)" fill="currentColor"></rect>
        <rect x="135.764" y="50.9121" width="48" height="14" transform="rotate(45 135.764 50.9121)" fill="currentColor"></rect>
        <rect x="60.811" y="125.865" width="48" height="14" transform="rotate(45 60.811 125.865)" fill="currentColor"></rect>
        <rect x="74.9531" y="159.806" width="48" height="14" transform="rotate(-45 74.9531 159.806)" fill="currentColor"></rect>
        <rect x="9.89941" y="74.9536" width="48" height="14" transform="rotate(45 9.89941 74.9536)" fill="currentColor"></rect>
        <rect y="84.853" width="48" height="14" transform="rotate(-45 0 84.853)" fill="currentColor"></rect>
        <rect x="84.8525" y="0.000488281" width="48" height="14" transform="rotate(45 84.8525 0.000488281)" fill="currentColor"></rect>
        <rect x="50.9116" y="33.9414" width="48" height="14" transform="rotate(-45 50.9116 33.9414)" fill="currentColor"></rect>
        <path d="M92.361 108.853L76.077 87.463V108.853H64.278V60.415H76.077V81.667L92.223 60.415H106.092L87.324 84.151L106.782 108.853H92.361Z" fill="currentColor"></path>
      </svg>
    </div>

    <div class="mt-auto gap-8 flex-col flex items-center mb-5">
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-icon hover:text-[#ff8c00] transition-all duration-300"
      >
        <span v-html="social.icon" class="w-6 h-6 block hover:-translate-y-1 transition-transform duration-300"></span>
      </a>
    </div>
  </nav>
</template>

<script setup>
const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/kromate',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/kromate_24',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`
  },
  {
    name: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=2348146923944',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3779 5.62793C16.6846 3.93457 14.4346 3 12.0381 3C7.09863 3 3.07617 7.01953 3.07617 11.959C3.07324 13.5381 3.48633 15.0791 4.27148 16.4385L3 21.082L7.75195 19.834C9.05859 20.5488 10.5352 20.9238 12.0352 20.9268H12.0381C16.9775 20.9268 20.9971 16.9072 21 11.9648C21 9.57129 20.0684 7.32129 18.3779 5.62793ZM12.0381 19.4121H12.0352C10.6992 19.4121 9.38672 19.0518 8.24414 18.375L7.97168 18.2139L5.15039 18.9521L5.90332 16.2041L5.72754 15.9229C4.98047 14.7363 4.58789 13.3652 4.58789 11.959C4.58789 7.85449 7.93066 4.51465 12.041 4.51465C14.0303 4.51465 15.8994 5.29102 17.3057 6.69727C18.7119 8.10645 19.4854 9.97559 19.4854 11.9648C19.4854 16.0723 16.1426 19.4121 12.0381 19.4121ZM16.1221 13.834C15.8994 13.7227 14.7979 13.1807 14.5928 13.1074C14.3877 13.0312 14.2383 12.9961 14.0889 13.2188C13.9395 13.4443 13.5117 13.9482 13.3799 14.0977C13.251 14.2441 13.1191 14.2646 12.8965 14.1533C12.6709 14.042 11.9502 13.8047 11.0947 13.04C10.4297 12.4482 9.97852 11.7129 9.84961 11.4902C9.71777 11.2646 9.83496 11.1445 9.94629 11.0332C10.0488 10.9336 10.1719 10.7725 10.2832 10.6406C10.3945 10.5117 10.4326 10.418 10.5088 10.2686C10.582 10.1191 10.5439 9.9873 10.4883 9.87598C10.4326 9.76465 9.98438 8.66016 9.79688 8.21191C9.61523 7.77539 9.43066 7.83691 9.29297 7.82812C9.16406 7.82227 9.01465 7.82227 8.86524 7.82227C8.71582 7.82227 8.47266 7.87793 8.26758 8.10352C8.0625 8.32617 7.48535 8.86816 7.48535 9.96973C7.48535 11.0713 8.28809 12.1377 8.39941 12.2871C8.51074 12.4336 9.97852 14.6953 12.2256 15.665C12.7588 15.8965 13.1748 16.0342 13.5 16.1367C14.0361 16.3066 14.5254 16.2832 14.9121 16.2275C15.3428 16.1631 16.2363 15.6855 16.4238 15.1611C16.6084 14.6396 16.6084 14.1914 16.5527 14.0977C16.4971 14.0039 16.3477 13.9482 16.1221 13.834Z" fill="currentColor"></path></svg>`
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/kromate_24/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/c/Kromate_24',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kromate/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
  }
]
</script>

<style scoped>
.animate-fade-in-slide {
  animation: fadeInSlideRight 0.5s ease-out 1.75s forwards;
}

@keyframes fadeInSlideRight {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-icon {
  color: #8892b0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon:hover {
  color: #ff8c00;
}
</style>