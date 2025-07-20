<script>
import { defineComponent } from "@vue/composition-api";
import jsonSktacks from "@/data/skills.json";
import { useI18n } from "~/composables/useI18n";

export default defineComponent({
  head() {
    return {
      title: 'Portfolio - Vinicius Fachini',
      meta: [
        { name: 'description', content: 'Portfolio Vinícius Fachini' },
        { name: 'keywords', content: 'desenvolvedor, dev, front' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
    };
  },
  data() {
    return {
      skills: [],
      size: 12,
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: '',
      submitStatus: ''
    };
  },
  computed: {
    i18n() {
      return useI18n();
    },
    projects() {
      return this.i18n.getProjects();
    }
  },
  methods: {    
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      this.submitMessage = '';
      this.submitStatus = '';
    },
    
    goToSection(sectionNumber) {
      const scrollState = useScrollState();
      console.log(sectionNumber);
      scrollState.setState(sectionNumber);
      
      // Calcular a posição de scroll baseada no tamanho real das seções
      let scrollPosition = 0;
      
      // Para a primeira seção, sempre vai para o topo
      if (sectionNumber === 1) {
        window.scrollTo(0, 0);
        return;
      }
      
      // Calcular a posição somando as alturas das seções anteriores
      for (let i = 1; i < sectionNumber; i++) {
        const section = document.querySelector(`.section-${i}`);
        if (section) {
          scrollPosition += section.offsetHeight;
        }
      }
      
      // Fazer o scroll suave para a posição calculada
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    },
  },
  mounted() {
    this.skills = jsonSktacks;
  },
});
</script>


<template>
  <div class="page">
    <div class="home section section-1">
      <Header></Header>
      <baseVerticalNavigator mode="light" />
      <section class="greetings">
        <h2 class="title">
          {{ i18n.t('greetings.title') }} <span class="accent">Vinícius Fachini</span>.
        </h2>
        <span class="subtitle">{{ i18n.t('greetings.subtitle') }}</span>
        <baseButton @click="goToSection(2)">
          {{ i18n.t('navigation.aboutMe') }}
          <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
            <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z" />
          </svg>
        </baseButton>
      </section>
    </div>
    <div class="about-me section section-2">
      <baseVerticalNavigator mode="dark" />
      <div class="section-title"><span>{{ i18n.t('aboutMe.title') }}</span></div>
      <div class="container">
        <div class="about">
          <img src="assets/picture.jpg" />
          <h3 class="who-am-i">{{ i18n.t('aboutMe.whoAmI') }}</h3>
          <span class="my-history">
            {{ i18n.t('aboutMe.description') }}
          </span>
        </div>
        <div class="qualities">
          <div class="qualities__grid">
            <div class="quality-item">
              <img class="quality-item__image" src="assets/feature-responsive.svg" />
              <div class="quality-item__title">{{ i18n.t('qualities.responsive.title') }}</div>
              <div class="quality-item__text">
                {{ i18n.t('qualities.responsive.description') }}
              </div>
            </div>
            <div class="quality-item">
              <img class="quality-item__image" src="assets/feature-dynamic.svg" />
              <div class="quality-item__title">{{ i18n.t('qualities.dynamic.title') }}</div>
              <div class="quality-item__text">
                {{ i18n.t('qualities.dynamic.description') }}
              </div>
            </div>
            <div class="quality-item">
              <img class="quality-item__image" src="assets/feature-intuitive.svg" />
              <div class="quality-item__title">{{ i18n.t('qualities.intuitive.title') }}</div>
              <div class="quality-item__text">
                {{ i18n.t('qualities.intuitive.description') }}
              </div>
            </div>
            <div class="quality-item">
              <img class="quality-item__image" src="assets/feature-fast.svg" />
              <div class="quality-item__title">{{ i18n.t('qualities.fast.title') }}</div>
              <div class="quality-item__text">
                {{ i18n.t('qualities.fast.description') }}
              </div>
            </div>
          </div>
          <div class="qualities__assurance">
            {{ i18n.t('aboutMe.assurance') }}
          </div>
        </div>
      </div>
      <baseButton @click="goToSection(3)">
        {{ i18n.t('navigation.viewMyWork') }}
        <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
          <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z" />
        </svg>
      </baseButton>
    </div>
    <div class="projects section section-3">
      <baseVerticalNavigator mode="light" />
      <div class="section-title"><span>{{ i18n.t('projects.title') }}</span></div>
      <Carousel :items-to-show="1" :snapAlign="center" :wrapAround="true">
        <slide v-for="project in projects" :key="project.title" class="container horizontal">
          <div class="project__image">
            <img :src="project.image.path" />
            <div class="image-text">
              <div v-text="project.image.imageTitle" class="project-title"></div>
              <div v-text="project.image.imageSubtitle" class="project-desc"></div>
              <div class="project-links">
                <div v-for="projectInfo in project.projectLink" class="project-link">
                  <a target="_blank" class="project__image__link" :href="projectInfo.link">
                    <baseButton>{{ projectInfo.title }}</baseButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project__info">
            <div v-text="project.title" class="project-title"></div>
            <div v-text="project.description" class="project-description"></div>
            <ul class="project-stack">
              <li v-for="stack in project.technologies" :key="stack">
                <nuxt-icon :name="`stack/${stack}`" />
                <!-- <img :src="'/_nuxt/assets/stack/' + stack + '.svg'" /> -->
              </li>
            </ul>
          </div>
        </slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="skills section section-4">
      <baseVerticalNavigator mode="dark" />
      <div class="section-title"><span>{{ i18n.t('skills.title') }}</span></div>
      <div class="skills__grid-container container">
        <ul class="skills__list">
          <li class="skills__item" v-for="(skill, index) in skills" :key="skill.name" :index="index" :class="{ last: index == skills.length - 1 }">
            <div class="skills__square">
              <baseSkillIcon :iconName="skill.id" />
              <span class="skills__name" v-text="skill.name"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="skills__cta">
        <span class="different-stack">{{ i18n.t('skills.differentStack') }}</span>
        <baseButton @click="goToSection(5)">{{ i18n.t('navigation.letsTalk') }}
          <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
            <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z" />
          </svg>
        </baseButton>
      </div>
    </div>
    <div class="contact section section-5">
      <baseVerticalNavigator mode="dark" />
      <div class="section-title"><span>{{ i18n.t('contact.title') }}</span></div>
      <div class="contact-page">
        <div class="contact-form">
          <form @submit="handleSubmit">
            <div class="form-group">
              <label for="name">{{ i18n.t('contact.form.name') }}</label>
              <input 
                v-model="formData.name"
                autocomplete="false" 
                id="name" 
                type="text" 
                :placeholder="i18n.t('contact.form.namePlaceholder')" 
                required
              />
            </div>
            <div class="form-group">
              <label for="email">{{ i18n.t('contact.form.email') }}</label>
              <input 
                v-model="formData.email"
                autocomplete="false" 
                id="email" 
                type="email" 
                :placeholder="i18n.t('contact.form.emailPlaceholder')" 
                required
              />
            </div>
            <div class="form-group">
              <label for="message">{{ i18n.t('contact.form.message') }}</label>
              <textarea 
                v-model="formData.message"
                autocomplete="false" 
                id="message" 
                :placeholder="i18n.t('contact.form.messagePlaceholder')"
                required
              ></textarea>
            </div>
            
            <!-- Mensagem de status -->
            <div v-if="submitMessage" class="submit-message" :class="submitStatus">
              {{ submitMessage }}
            </div>
            
            <div class="button-container">
              <baseButton 
                class="send" 
                type="submit" 
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? i18n.t('contact.form.sending') : i18n.t('contact.form.send') }}
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                  <defs></defs>
                  <g style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    " transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path d="M 89.999 3.075 C 90 3.02 90 2.967 89.999 2.912 c -0.004 -0.134 -0.017 -0.266 -0.038 -0.398 c -0.007 -0.041 -0.009 -0.081 -0.018 -0.122 c -0.034 -0.165 -0.082 -0.327 -0.144 -0.484 c -0.018 -0.046 -0.041 -0.089 -0.061 -0.134 c -0.053 -0.119 -0.113 -0.234 -0.182 -0.346 C 89.528 1.382 89.5 1.336 89.469 1.29 c -0.102 -0.147 -0.212 -0.288 -0.341 -0.417 c -0.13 -0.13 -0.273 -0.241 -0.421 -0.344 c -0.042 -0.029 -0.085 -0.056 -0.129 -0.082 c -0.118 -0.073 -0.239 -0.136 -0.364 -0.191 c -0.039 -0.017 -0.076 -0.037 -0.116 -0.053 c -0.161 -0.063 -0.327 -0.113 -0.497 -0.147 c -0.031 -0.006 -0.063 -0.008 -0.094 -0.014 c -0.142 -0.024 -0.285 -0.038 -0.429 -0.041 C 87.03 0 86.983 0 86.936 0.001 c -0.141 0.003 -0.282 0.017 -0.423 0.041 c -0.035 0.006 -0.069 0.008 -0.104 0.015 c -0.154 0.031 -0.306 0.073 -0.456 0.129 L 1.946 31.709 c -1.124 0.422 -1.888 1.473 -1.943 2.673 c -0.054 1.199 0.612 2.316 1.693 2.838 l 34.455 16.628 l 16.627 34.455 C 53.281 89.344 54.334 90 55.481 90 c 0.046 0 0.091 -0.001 0.137 -0.003 c 1.199 -0.055 2.251 -0.819 2.673 -1.943 L 89.815 4.048 c 0.056 -0.149 0.097 -0.3 0.128 -0.453 c 0.008 -0.041 0.011 -0.081 0.017 -0.122 C 89.982 3.341 89.995 3.208 89.999 3.075 z M 75.086 10.672 L 37.785 47.973 L 10.619 34.864 L 75.086 10.672 z M 55.136 79.381 L 42.027 52.216 l 37.302 -37.302 L 55.136 79.381 z" style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill-rule: nonzero;
                        opacity: 1;
                      " transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  </g>
                </svg>
              </baseButton>
              <baseButton class="reset" type="button" @click="resetForm">{{ i18n.t('contact.form.reset') }}
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.99756V7.99756H7" stroke="#41B883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23 17.9976V11.9976H17" stroke="#41B883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.49 6.99763C19.9828 5.56442 19.1209 4.28304 17.9845 3.27305C16.8482 2.26307 15.4745 1.5574 13.9917 1.22189C12.5089 0.886385 10.9652 0.931975 9.50481 1.35441C8.04437 1.77684 6.71475 2.56235 5.64 3.63763L1 7.99763M23 11.9976L18.36 16.3576C17.2853 17.4329 15.9556 18.2184 14.4952 18.6409C13.0348 19.0633 11.4911 19.1089 10.0083 18.7734C8.52547 18.4379 7.1518 17.7322 6.01547 16.7222C4.87913 15.7122 4.01717 14.4308 3.51 12.9976" stroke="#41B883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </baseButton>
            </div>
            <ul class="social">
              <li class="social__item">
                <a target="_blank" href="https://linkedin.com/in/vinicius-fachini">
                  <img src="assets/social/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li class="social__item">
                <a target="_blank" href="/Curriculo.pdf" download>
                  <img src="assets/social/download.svg" alt="Resume" />
                </a>
              </li>
              <li class="social__item">
                <a target="_blank" href="mailto:vinicius.fachini01@gmail.com">
                  <img src="assets/social/email.svg" alt="Email" />
                </a>
              </li>
              <li class="social__item">
                <a target="_blank" href="https://wa.me/5518996248348?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!">
                  <img src="assets/social/whatsapp.svg" alt="Whatsapp" />
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel__slide {}

.carousel__pagination {
  position: absolute;
  bottom: -25%;
  background-color: #ffffff26;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 10px;
  height: 30px;

  @media screen and (max-width: 768px) {
    bottom: -20%;
    height: 25px;
    padding-inline: 8px;
  }

  @media screen and (max-width: 480px) {
    bottom: -15%;
    height: 20px;
    padding-inline: 6px;
  }
}

.contact {
  padding: 0;

  background-size: 100% 100vh !important;

  .section-title {
    color: white !important;
    padding-top: 32px;
    margin-bottom: 32px;

    @media screen and (max-width: 992px) {
      padding-top: 16px;
      margin-bottom: 16px;
    }

    @media screen and (max-width: 480px) {
      padding-top: 8px;
      margin-bottom: 8px;
    }
  }

  .contact-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 120px);
    gap: 0;

    @media screen and (max-width: 992px) {
      flex-direction: column;
      height: auto;
      min-height: calc(100vh - 120px);
    }
  }

  .contact-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;

    @media screen and (max-width: 992px) {
      width: 100%;
      padding: 16px;
    }

    @media screen and (max-width: 480px) {
      padding: 8px;
    }

    form {
      width: 100%;
      max-width: 800px;

      @media screen and (max-width: 992px) {
        max-width: 100%;
      }

      @media screen and (max-width: 768px) {
        max-width: 100%;
      }

      .social {
        margin-top: 64px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;

        @media screen and (max-width: 768px) {
          margin-top: 48px;
          gap: 12px;
        }

        @media screen and (max-width: 480px) {
          margin-top: 32px;
          gap: 8px;
          justify-content: center;
        }

        &__item {
          width: 64px;
          height: 64px;
          background-color: #41b883;
          cursor: pointer;
          border-radius: 3px;
          transition: all 0.2s linear;

          @media screen and (max-width: 768px) {
            width: 56px;
            height: 56px;
          }

          @media screen and (max-width: 480px) {
            width: 48px;
            height: 48px;
          }

          &:hover {
            background-color: #339267;
          }

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

            img {
              @media screen and (max-width: 768px) {
                width: 24px;
                height: 24px;
              }

              @media screen and (max-width: 480px) {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 16px;

        @media screen and (max-width: 768px) {
          margin-bottom: 12px;
        }

        @media screen and (max-width: 480px) {
          margin-bottom: 8px;
        }

        label {
          color: white;
          width: 100%;
          font-size: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
          margin-bottom: 8px;

          @media screen and (max-width: 768px) {
            font-size: clamp(0.875rem, 0.8rem + 0.4vw, 1.25rem);
            margin-bottom: 6px;
          }

          @media screen and (max-width: 480px) {
            font-size: clamp(0.75rem, 0.7rem + 0.3vw, 1rem);
            margin-bottom: 4px;
          }
        }

        input {
          width: 100%;
          border-radius: 5px;
          padding: 8px 16px;
          outline: none;
          background: #ffffff42;
          color: white;
          border: none !important;
          height: 60px;
          font-size: 20px;

          @media screen and (max-width: 768px) {
            height: 50px;
            font-size: 18px;
          }

          @media screen and (max-width: 480px) {
            height: 45px;
            font-size: 16px;
            padding: 8px 12px;
          }

          &::placeholder {
            color: #ffffff75;
          }
        }

        textarea {
          resize: none !important;
          height: 200px;
          width: 100%;
          outline: none;
          background: #ffffff42;
          border: none !important;
          font-size: 20px;
          border-radius: 5px;
          padding: 8px 16px;
          color: white;
          margin-bottom: 4px;

          @media screen and (max-width: 768px) {
            height: 150px;
            font-size: 18px;
          }

          @media screen and (max-width: 480px) {
            height: 120px;
            font-size: 16px;
            padding: 8px 12px;
          }

          &::placeholder {
            color: #ffffff75;
          }
        }
      }

      .submit-message {
        margin-bottom: 16px;
        padding: 12px 16px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        
        &.success {
          background-color: rgba(65, 184, 131, 0.2);
          color: #41b883;
          border: 1px solid #41b883;
        }
        
        &.error {
          background-color: rgba(255, 0, 0, 0.1);
          color: #ff6b6b;
          border: 1px solid #ff6b6b;
        }
      }

      .button-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          gap: 16px;
        }

        @media screen and (max-width: 480px) {
          gap: 12px;
        }

        .send,
        .reset {
          width: 220px;
          height: 50px;
          border-radius: 5px;

          @media screen and (max-width: 768px) {
            width: 100%;
            max-width: 300px;
          }

          @media screen and (max-width: 480px) {
            height: 45px;
            font-size: 16px;
          }

          svg {
            transition: all 0.2s linear;
            width: 16px;
            height: 16px;
          }
        }

        .reset {
          color: #41b883;
          border: 1px solid #41b883;
          background: transparent;
          transition: all 0.2s linear;
          cursor: pointer;

          @media screen and (max-width: 480px) {
            font-size: 14px;
          }

          svg {
            margin-left: 4px;
            transition: all 0.2s linear;

            path {
              transition: all 0.2s linear;
            }
          }

          &:hover {
            color: #fff;
            background: #41b883;
            border-color: #41b883;

            svg {
              path {
                // fill: white;
                stroke: white;
              }
            }
          }
        }

        .send {
          background-color: #41b883;
          border: 1px solid #41b883;
          color: white;
          cursor: pointer;
          transition: all 0.2s linear;

          @media screen and (max-width: 480px) {
            font-size: 14px;
          }

          svg {
            fill: white;
            stroke: white;
            margin-left: 4px;

            path {
              fill: white;
              stroke: white;
            }
          }

          &:hover {
            background-color: transparent;
            color: white;

            svg {
              path {
                fill: white;
                stroke: white;
              }
            }
          }
        }
      }
    }
  }
}

.skills {
  background-color: white !important;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    padding: 16px;
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
  }

  .skills__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span.different-stack {
      font-size: clamp(1.125rem, 0.85rem + 1.375vw, 2.5rem);
      text-align: center;
      color: #1b2631;
      font-weight: 500;

      @media screen and (max-width: 768px) {
        font-size: clamp(1rem, 0.8rem + 1vw, 2rem);
      }

      @media screen and (max-width: 480px) {
        font-size: clamp(0.875rem, 0.7rem + 0.75vw, 1.5rem);
      }
    }

    button {
      margin-top: 16px;
      border: 2px solid #41b883;
      background-color: transparent;
      color: #41b883;
      padding: 16px 32px;
      border-radius: 5px;
      font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s linear;

      @media screen and (max-width: 992px) {
        padding: 12px 24px;
        margin-top: 12px;
      }

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        margin-top: 10px;
        gap: 12px;
      }

      @media screen and (max-width: 480px) {
        padding: 8px 16px;
        margin-top: 8px;
        gap: 8px;
        font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.25rem);
      }

      svg {
        fill: #41b883;
        transition: all 0.2s linear;
        width: 16px;
        height: 16px;

        @media screen and (max-width: 480px) {
          width: 14px;
          height: 14px;
        }
      }

      &:hover {
        background-color: #41b883;
        color: white;

        svg {
          transform: rotate(90deg);
          fill: white;
        }
      }
    }
  }
}

.skills {
  &__grid-container {}

  &__list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 32px;
    gap: 16px;
    max-width: 60vw;
    padding-top: 20px;
    margin: 0 auto;

    @media screen and (max-width: 992px) {
      max-width: unset !important;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      padding-bottom: 16px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      padding-bottom: 12px;
    }
  }

  &__item {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #41b883;
    flex-direction: column;
    transition: all 0.2s linear;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      height: 80px;
    }

    @media screen and (max-width: 480px) {
      height: 70px;
    }

    &:hover {
      background-color: #339267;
    }
  }

  &__square {
    width: 65px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 50px;
    }

    @media screen and (max-width: 480px) {
      width: 45px;
    }

    svg {
      width: 50px;
      height: 50px;

      @media screen and (max-width: 768px) {
        width: 40px;
        height: 40px;
      }

      @media screen and (max-width: 480px) {
        width: 35px;
        height: 35px;
      }
    }
  }

  &__name {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: block;

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }

  &__progress {
    height: 100%;
    width: 24px;
    position: relative;
    display: flex;
    align-items: flex-end;

    &--bar {
      background: linear-gradient(0deg, #34495e 18.63%, #41b883 78.88%);
      width: 24px;
    }
  }

  &__ruler {
    display: flex;
    flex-direction: column-reverse;
    border-right: 1px solid #34495e;
    height: 83%;
    position: relative;
    bottom: 16px;
    left: 16px;
    justify-content: space-between;
    padding-right: 10px;
    padding-bottom: 50px;

    li {
      color: #34495e;
      font-size: 24px;
      transform: translateY(-50%);
      position: relative;
      font-weight: 500;
    }
  }
}

.projects {
  padding-block: 32px;

  @media screen and (max-width: 992px) {
    padding-block: 24px;
  }

  @media screen and (max-width: 768px) {
    padding-block: 20px;
  }

  @media screen and (max-width: 480px) {
    padding-block: 16px;
  }

  .section-title {
    color: white;
  }

  .carousel__pagination-button::after {
    --vc-pgn-width: 16px;
  }

  .container {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    justify-content: center;
    min-width: 100% !important;
    padding: 0 20px;

    .project-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    @media screen and (max-width: 1200px) {
      gap: 30px;
    }

    @media screen and (max-width: 992px) {
      flex-direction: column;
      gap: 0 !important;
      padding: 0 16px;

      .project__image {
        max-width: unset;
        margin-top: 0;
        width: 100%;
        height: 300px;

        @media screen and (max-width: 480px) {
          height: 200px;
          margin-top: 0;
        }

        .image-text {
          border-radius: 10px 10px 0 0;
        }

        img {
          width: 100%;
          border-radius: 10px 10px 0 0;
        }
      }

      .project__info {
        max-width: unset;
        margin-top: 0;
        color: #34495e;
        padding: 24px;
        background: white;
        border-radius: 0 0 10px 10px;

        @media screen and (max-width: 768px) {
          padding: 20px;
        }

        @media screen and (max-width: 480px) {
          padding: 16px;
        }
      }
    }

    @media screen and (max-width: 480px) {
      padding: 0 12px;
      gap: 16px;
    }
  }

  .project__info {
    margin-top: 50px;
    color: white;
    max-width: 50%;
    text-align: left;

    @media screen and (max-width: 1200px) {
      margin-top: 40px;
    }

    @media screen and (max-width: 992px) {
      margin-top: 0;
      max-width: 100%;
    }

    .project-title {
      font-size: clamp(1rem, 0.8rem + 1vw, 2rem);
      margin-bottom: 16px;

      @media screen and (max-width: 768px) {
        margin-bottom: 12px;
      }

      @media screen and (max-width: 480px) {
        margin-bottom: 8px;
      }
    }

    .project-description {
      font-size: clamp(0.875rem, 0.75rem + 0.625vw, 1.5rem);
      padding-right: 10%;
      margin-bottom: 20px;
      line-height: 1.6;

      @media screen and (max-width: 992px) {
        padding-right: 0;
        margin-bottom: 16px;
      }

      @media screen and (max-width: 480px) {
        margin-bottom: 12px;
        line-height: 1.5;
      }
    }

    .project-stack {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 20px;
      margin-top: 20px;

      @media screen and (max-width: 768px) {
        gap: 16px;
        margin-top: 16px;
      }

      @media screen and (max-width: 480px) {
        gap: 12px;
        margin-top: 12px;
        flex-wrap: wrap;
      }
    }
  }

  .project__image {
    margin-top: 50px;
    position: relative;
    max-width: 40%;

    @media screen and (max-width: 1200px) {
      margin-top: 40px;
    }

    @media screen and (max-width: 992px) {
      margin-top: 0;
      max-width: 100%;
    }

    &__link {
      text-decoration: none;
    }

    img {
      object-fit: cover;
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }

    .image-text {
      position: absolute;
      display: flex;
      width: 100%;
      top: 0;
      left: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      height: 100%;
      background: linear-gradient(0deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 212, 255, 0) 100%);
      color: white;

      .project-title {
        font-size: 32px;
        margin-bottom: 16px;

        @media screen and (max-width: 768px) {
          font-size: 28px;
          margin-bottom: 12px;
        }

        @media screen and (max-width: 480px) {
          font-size: 24px;
          margin-bottom: 8px;
        }
      }

      .project-desc {
        font-size: 24px;
        margin-bottom: 16px;

        @media screen and (max-width: 768px) {
          font-size: 20px;
          margin-bottom: 12px;
        }

        @media screen and (max-width: 480px) {
          font-size: 18px;
          margin-bottom: 8px;
        }
      }

      button {
        margin-top: 32px;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        padding: 16px 32px;
        border-radius: 5px;
        font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        cursor: pointer;
        transition: all 0.2s linear;

        @media screen and (max-width: 992px) {
          padding: 12px 24px;
          margin-top: 24px;
        }

        @media screen and (max-width: 768px) {
          padding: 10px 20px;
          margin-top: 20px;
          gap: 12px;
        }

        @media screen and (max-width: 480px) {
          padding: 8px 16px;
          margin-top: 16px;
          gap: 8px;
          font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.25rem);
        }

        &:hover {
          background-color: white;
          color: #1b2631;
        }
      }
    }
  }
}

.section-title {
  font-size: 32px;
  text-align: center;
  position: relative;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 2px;
    background-color: #41b883;

    @media screen and (max-width: 480px) {
      width: 80px;
    }
  }
}

.about-me {
  background: white !important;
  padding-block: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    padding-block: 16px;
  }

  @media screen and (max-width: 480px) {
    padding-block: 8px;
  }

  .section-title {
    color: #34495e;
  }

  &>.container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 992px) {
      flex-direction: column;
      padding-top: 40px;
    }
  }

  .about {
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 992px) {
      max-width: 80%;
    }

    img {
      max-width: 300px;
      width: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 768px) {
        max-width: 250px;
      }

      @media screen and (max-width: 480px) {
        max-width: 200px;
      }
    }

    h3.who-am-i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block: 32px 16px;
      font-size: clamp(1.125rem, 0.85rem + 1.375vw, 2.5rem);
      color: #34495e;
    }

    span.my-history {
      display: flex;
      text-align: left;
      font-size: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
    }
  }

  .qualities {
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 992px) {
      max-width: 80%;
    }

    &__assurance {
      font-size: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
      margin-top: 40px;
      color: #34495e;

      @media screen and (max-width: 768px) {
        margin-top: 32px;
      }

      @media screen and (max-width: 480px) {
        margin-top: 24px;
        text-align: center;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
      place-items: center;

      @media screen and (max-width: 768px) {
        gap: 20px;
      }

      @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .quality-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        max-width: 280px;

        @media screen and (max-width: 480px) {
          max-width: 100%;
        }

        &__image {
          max-width: 100px;

          @media screen and (max-width: 768px) {
            max-width: 80px;
          }

          @media screen and (max-width: 480px) {
            max-width: 70px;
          }
        }

        &__title {
          font-size: clamp(1.125rem, 0.95rem + 0.875vw, 2rem);
          color: #34495e;
          margin-block: 20px 10px;

          @media screen and (max-width: 480px) {
            margin-block: 16px 8px;
          }
        }

        &__text {
          color: #34495e;
          text-align: center;
          font-size: clamp(0.75rem, 0.7rem + 0.25vw, 1rem);
        }
      }
    }
  }

  button {
    margin-top: 32px;
    border: 2px solid #41b883;
    background-color: transparent;
    color: #41b883;
    padding: 16px 32px;
    border-radius: 5px;
    font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;
    transition: all 0.2s linear;

    @media screen and (max-width: 992px) {
      padding: 12px 24px;
      margin-top: 24px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 20px;
      margin-top: 20px;
      gap: 12px;
    }

    @media screen and (max-width: 480px) {
      padding: 8px 16px;
      margin-top: 16px;
      gap: 8px;
      font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.25rem);
    }

    svg {
      fill: #41b883;
      transition: all 0.2s linear;
      width: 16px;
      height: 16px;

      @media screen and (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }

    &:hover {
      background-color: #41b883;
      color: white;

      svg {
        transform: rotate(90deg);
        fill: white;
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}

.page {
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  // height: 100vh;
}

.section {
  background: #1b2631;
  position: relative;
  min-height: 100dvh;

      &.section-3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .carousel__slide {
        padding-inline: 20px;

        @media screen and (max-width: 768px) {
          padding-inline: 16px;
        }

        @media screen and (max-width: 480px) {
          padding-inline: 12px;
        }
      }

      .section-title {
        position: absolute;
        top: 50px;
        right: 0;
        left: 0;

        @media screen and (max-width: 992px) {
          top: 30px;
        }

        @media screen and (max-width: 480px) {
          top: 20px;
        }
      }
    }

  .greetings {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80dvw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      width: 90dvw;
    }

    @media screen and (max-width: 480px) {
      width: 95dvw;
    }

    .title {
      font-size: clamp(2rem, 1.6rem + 3vw, 4rem);
      color: white;
      font-weight: 400;

      @media screen and (max-width: 480px) {
        font-size: clamp(1.5rem, 1.2rem + 2vw, 2.5rem);
      }

      .accent {
        color: #41b883;
      }
    }

    .subtitle {
      font-size: clamp(2rem, 1.6rem + 2vw, 4rem);
      color: white;
      font-weight: 400;

      @media screen and (max-width: 480px) {
        font-size: clamp(1.5rem, 1.2rem + 2vw, 2.5rem);
      }
    }

    button {
      margin-top: 32px;
      border: 2px solid white;
      background-color: transparent;
      color: white;
      padding: 16px 32px;
      border-radius: 5px;
      font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s linear;

      @media screen and (max-width: 992px) {
        padding: 12px 24px;
        margin-top: 24px;
      }

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        margin-top: 20px;
        gap: 12px;
      }

      @media screen and (max-width: 480px) {
        padding: 8px 16px;
        margin-top: 16px;
        gap: 8px;
        font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.25rem);
      }

      svg {
        fill: #ffffff;
        transition: all 0.2s linear;
        width: 16px;
        height: 16px;

        @media screen and (max-width: 480px) {
          width: 14px;
          height: 14px;
        }
      }

      &:hover {
        background-color: white;
        color: #1b2631;

        svg {
          transform: rotate(90deg);
          fill: #1b2631;
        }
      }
    }
  }
}
</style>