<script>
import { defineComponent } from "@vue/composition-api";
import jsonSktacks from "@/data/skills.json";
import jsonProjects from "@/data/projects.json";

export default defineComponent({
  data() {
    return {
      skills: [],
      size: 12,
      projects: [],
    };
  },
  methods: {
    goToSection(sectionNumber) {
      const scrollState = useScrollState();
      console.log(sectionNumber);
      scrollState.setState(sectionNumber);
      if (sectionNumber == 1) {
        window.scrollTo(0, (window.innerHeight / 2) * 0);
      } else if (sectionNumber == 2) {
        window.scrollTo(0, (window.innerHeight / 2) * 2);
      } else if (sectionNumber == 3) {
        window.scrollTo(0, (window.innerHeight / 2) * 4);
      } else if (sectionNumber == 4) {
        window.scrollTo(0, (window.innerHeight / 2) * 6);
      } else if (sectionNumber == 5) {
        window.scrollTo(0, (window.innerHeight / 2) * 8);
      }
    },
  },
  mounted() {
    this.skills = jsonSktacks;
    this.projects = jsonProjects;
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
          Hello, I'm <span class="accent">Vinícius Fachini</span>.
        </h2>
        <span class="subtitle">Your Front End Software Developer</span>
        <baseButton @click="goToSection(2)">
          About Me
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </baseButton>
      </section>
    </div>
    <div class="about-me section section-2">
      <baseVerticalNavigator mode="dark" />
      <div class="section-title"><span>About Me</span></div>
      <div class="container">
        <div class="about">
          <img src="assets/picture.jpg" />
          <h3 class="who-am-i">Who Am I?</h3>
          <span class="my-history">
            I'm a Front-End Software Developer from Brazil. Since I was a young
            boy I always loved to understand how things worked and programming
            is how I can make them work! Lets make something special!
          </span>
        </div>
        <div class="qualities">
          <div class="qualities__grid">
            <div class="quality-item">
              <img
                class="quality-item__image"
                src="assets/feature-responsive.svg"
              />
              <div class="quality-item__title">Responsive</div>
              <div class="quality-item__text">
                My layouts will work on any device, big or small.
              </div>
            </div>
            <div class="quality-item">
              <img
                class="quality-item__image"
                src="assets/feature-dynamic.svg"
              />
              <div class="quality-item__title">Dynamic</div>
              <div class="quality-item__text">
                Websites don't have to be static, I love making pages come to
                life.
              </div>
            </div>
            <div class="quality-item">
              <img
                class="quality-item__image"
                src="assets/feature-intuitive.svg"
              />
              <div class="quality-item__title">Intuitive</div>
              <div class="quality-item__text">
                Strong preference for easy to use, intuitive UX/UI.
              </div>
            </div>
            <div class="quality-item">
              <img class="quality-item__image" src="assets/feature-fast.svg" />
              <div class="quality-item__title">Fast</div>
              <div class="quality-item__text">
                Fast load times and lag free interaction, my highest priority.
              </div>
            </div>
          </div>
          <div class="qualities__assurance">
            Guaranteed quality for your project!
          </div>
        </div>
      </div>
      <baseButton @click="goToSection(3)">
        View My Work
        <svg
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xml:space="preserve"
        >
          <path
            id="XMLID_222_"
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </baseButton>
    </div>
    <div class="projects section section-3">
      <baseVerticalNavigator mode="light" />:
      <div class="section-title"><span>Projects</span></div>
      <Carousel :items-to-show="1" :snapAlign="center" :wrapAround="true">
        <slide
          v-for="project in projects"
          :key="project.title"
          class="container horizontal"
        >
          <div class="project__image">
            <img :src="project.image.path" />
            <div class="image-text">
              <div
                v-text="project.image.imageTitle"
                class="project-title"
              ></div>
              <div
                v-text="project.image.imageSubtitle"
                class="project-desc"
              ></div>
              <a
                target="_blank"
                class="project__image__link"
                :href="project.projectLink"
              >
                <baseButton text="View Project" />
              </a>
            </div>
          </div>
          <div class="project__info">
            <div v-text="project.title" class="project-title"></div>
            <div v-text="project.description" class="project-description"></div>
            <ul class="project-stack">
              <li v-for="stack in project.technologies" :key="stack">
                <img :src="'/_nuxt/assets/stack/' + stack + '.svg'" />
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
      <div class="section-title"><span>Skills</span></div>
      <div class="skills__grid-container container">
        <ul class="skills__list">
          <li
            class="skills__item"
            v-for="(skill, index) in skills"
            :key="skill.name"
            :index="index"
            :class="{ last: index == skills.length - 1 }"
          >
            <div class="skills__square">
              <baseSkillIcon :iconName="skill.id" />
              <span class="skills__name" v-text="skill.name"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="skills__cta">
        <span class="different-stack"
          >Got a project with a different stack?</span
        >
        <baseButton @click="goToSection(5)"
          >Let's Talk!
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </baseButton>
      </div>
    </div>
    <div class="contact section section-5">
      <baseVerticalNavigator mode="dark" />
      <div class="section-title"><span>Contact</span></div>
      <div class="contact-page">
        <div class="contact-form">
          <form action="#">
            <div class="form-group">
              <label for="name">Your Name:</label>
              <input
                autocomplete="false"
                id="name"
                type="text"
                placeholder="Name..."
              />
            </div>
            <div class="form-group">
              <label for="email">Your E-mail:</label>
              <input
                autocomplete="false"
                id="email"
                type="text"
                placeholder="Email..."
              />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                autocomplete="false"
                id="message"
                placeholder="Type here your message..."
              ></textarea>
            </div>
            <div class="button-container">
              <baseButton class="send" type="submit"
                >Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 89.999 3.075 C 90 3.02 90 2.967 89.999 2.912 c -0.004 -0.134 -0.017 -0.266 -0.038 -0.398 c -0.007 -0.041 -0.009 -0.081 -0.018 -0.122 c -0.034 -0.165 -0.082 -0.327 -0.144 -0.484 c -0.018 -0.046 -0.041 -0.089 -0.061 -0.134 c -0.053 -0.119 -0.113 -0.234 -0.182 -0.346 C 89.528 1.382 89.5 1.336 89.469 1.29 c -0.102 -0.147 -0.212 -0.288 -0.341 -0.417 c -0.13 -0.13 -0.273 -0.241 -0.421 -0.344 c -0.042 -0.029 -0.085 -0.056 -0.129 -0.082 c -0.118 -0.073 -0.239 -0.136 -0.364 -0.191 c -0.039 -0.017 -0.076 -0.037 -0.116 -0.053 c -0.161 -0.063 -0.327 -0.113 -0.497 -0.147 c -0.031 -0.006 -0.063 -0.008 -0.094 -0.014 c -0.142 -0.024 -0.285 -0.038 -0.429 -0.041 C 87.03 0 86.983 0 86.936 0.001 c -0.141 0.003 -0.282 0.017 -0.423 0.041 c -0.035 0.006 -0.069 0.008 -0.104 0.015 c -0.154 0.031 -0.306 0.073 -0.456 0.129 L 1.946 31.709 c -1.124 0.422 -1.888 1.473 -1.943 2.673 c -0.054 1.199 0.612 2.316 1.693 2.838 l 34.455 16.628 l 16.627 34.455 C 53.281 89.344 54.334 90 55.481 90 c 0.046 0 0.091 -0.001 0.137 -0.003 c 1.199 -0.055 2.251 -0.819 2.673 -1.943 L 89.815 4.048 c 0.056 -0.149 0.097 -0.3 0.128 -0.453 c 0.008 -0.041 0.011 -0.081 0.017 -0.122 C 89.982 3.341 89.995 3.208 89.999 3.075 z M 75.086 10.672 L 37.785 47.973 L 10.619 34.864 L 75.086 10.672 z M 55.136 79.381 L 42.027 52.216 l 37.302 -37.302 L 55.136 79.381 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </baseButton>
              <baseButton class="reset" type="reset"
                >Reset
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.99756V7.99756H7"
                    stroke="#41B883"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 17.9976V11.9976H17"
                    stroke="#41B883"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.49 6.99763C19.9828 5.56442 19.1209 4.28304 17.9845 3.27305C16.8482 2.26307 15.4745 1.5574 13.9917 1.22189C12.5089 0.886385 10.9652 0.931975 9.50481 1.35441C8.04437 1.77684 6.71475 2.56235 5.64 3.63763L1 7.99763M23 11.9976L18.36 16.3576C17.2853 17.4329 15.9556 18.2184 14.4952 18.6409C13.0348 19.0633 11.4911 19.1089 10.0083 18.7734C8.52547 18.4379 7.1518 17.7322 6.01547 16.7222C4.87913 15.7122 4.01717 14.4308 3.51 12.9976"
                    stroke="#41B883"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </baseButton>
            </div>
            <ul class="social">
              <li class="social__item">
                <a href="#">
                  <img src="assets/social/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li class="social__item">
                <a href="#">
                  <img src="assets/social/download.svg" alt="Resume" />
                </a>
              </li>
              <li class="social__item">
                <a href="#">
                  <img src="assets/social/email.svg" alt="Email" />
                </a>
              </li>
              <li class="social__item">
                <a href="#">
                  <img src="assets/social/whatsapp.svg" alt="Whatsapp" />
                </a>
              </li>
            </ul>
          </form>
        </div>
        <div class="contact-image">
          <img src="assets/contact-image.svg" />
          <span class="working-text">Looking Forward to work with you!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel__slide {
}

.carousel__pagination {
  position: absolute;
  bottom: -100px;
  background-color: #ffffff26;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 10px;
  height: 30px;
}

.contact {
  background-image: url("assets/contact-mask.svg") !important;
  background-repeat: no-repeat !important;
  background-position: top 0 right -600px !important;
  padding: 32px;
  background-size: 100% 100vh !important;
  .section-title {
    color: white !important;
  }
  .contact-page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 95%;
  }
  .contact-form {
    width: 100%;
    max-width: 60%;
    display: flex;
    justify-content: center;
    form {
      width: 60%;
      .social {
        margin-top: 64px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        &__item {
          width: 64px;
          height: 64px;
          background-color: #41b883;
          cursor: pointer;
          border-radius: 3px;
          transition: all 0.2s linear;
          &:hover {
            background-color: #339267;
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
        }
      }
      .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 16px;
        label {
          color: white;
          width: 100%;
          font-size: 24px;
          margin-bottom: 8px;
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
          &::placeholder {
            color: #ffffff75;
          }
        }
        textarea {
          resize: none !important;
          height: 250px;
          width: 100%;
          outline: none;
          background: #ffffff42;
          border: none !important;
          font-size: 20px;
          border-radius: 5px;
          padding: 8px 16px;
          color: white;
          margin-bottom: 4px;
          &::placeholder {
            color: #ffffff75;
          }
        }
      }
      .button-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        .send,
        .reset {
          width: 220px;
          height: 50px;
          border-radius: 5px;
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
  .contact-image {
    width: 100%;
    max-width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .working-text {
      font-size: 64px;
      color: #34495e;
      text-align: center;
      display: flex;
      max-width: 70%;
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
  .skills__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span.different-stack {
      font-size: 32px;
      color: #1b2631;
      font-weight: 500;
    }
    button {
      margin-top: 16px;
      border: 2px solid #41b883;
      background-color: transparent;
      color: #41b883;
      padding: 16px 32px;
      border-radius: 5px;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s linear;
      svg {
        fill: #41b883;
        transition: all 0.2s linear;
        width: 16px;
        height: 16px;
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
  &__grid-container {
  }
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
    margin: 0 auto;
  }
  &__item {
    width: 100%;
    padding-top: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #41b883;
    flex-direction: column;
    transition: all .2s linear;
    border-radius: 5px;
    &:hover {
      background-color: #339267;
    }
  }
  &__square {
    width: 65px;
    height: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    svg {
      width: 50px;
      height: 50px;
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
    padding: 5px 0 15px;
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
  @media screen and (max-width: 767px) {
    &__item {
      display: flex;
      align-items: center;
      &.last {
        .skills__square {
          position: relative;
          &::before {
            content: "";
            background: #34495e;
            width: 1px;
            height: 20px;
            display: block;
            position: absolute;
            top: 100%;
            right: -1px;
          }
        }
      }
    }
    &__square {
      width: 80px;
      height: 96px;
      padding-right: 20px;
      border-right: 1px solid #34495e;
      svg {
        width: 100%;
        height: calc(100% - 34px);
      }
    }
    &__name {
      color: #41b883;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: block;
      padding: 5px 0 15px;
    }
    &__progress {
      height: 24px;
      width: calc(100% - 80px);
      &--bar {
        background: linear-gradient(90deg, #34495e 18.63%, #41b883 78.88%);
        height: 24px;
      }
    }
    &__ruler {
      width: calc(100% - 60px);
      display: flex;
      border-top: 1px solid #34495e;
      justify-content: space-between;
      margin-left: auto;
      position: relative;
      padding-left: 20px;
      padding-top: 5px;
      li {
        color: #fff;
        font-size: 9px;
        transform: translateX(50%);
        position: relative;
        &::before {
          content: "";
          width: 1px;
          height: 7px;
          background: #34495e;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -13px;
        }
      }
    }
  }
}
.projects {
  padding-block: 32px;
  .section-title {
    color: white;
  }
  .carousel__pagination-button::after {
    --vc-pgn-width: 16px;
  }

  .container {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    min-width: 100% !important;
  }
  .project__info {
    margin-top: 50px;
    color: white;
    max-width: 35%;
    text-align: left;
    .project-title {
      font-size: 32px;
    }
    .project-description {
      font-size: 24px;
    }
    .project-stack {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 20px;
      margin-top: 20px;
    }
  }
  .project__image {
    margin-top: 50px;
    position: relative;
    max-width: 830px;
    height: 700px;
    &__link {
      text-decoration: none;
    }
    img {
      object-fit: cover;
      border-radius: 10px;
      height: 100%;
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
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 212, 255, 0) 100%
      );
      color: white;
      .project-title {
        font-size: 32px;
        margin-bottom: 16px;
      }
      .project-desc {
        font-size: 24px;
        margin-bottom: 16px;
      }
      button {
        margin-top: 32px;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        padding: 16px 32px;
        border-radius: 5px;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        cursor: pointer;
        transition: all 0.2s linear;
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
  }
}
.about-me {
  background: white !important;
  padding-block: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .section-title {
    color: #34495e;
  }
  & > .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .about {
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 400px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    h3.who-am-i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block: 32px 16px;
      font-size: 40px;
      color: #34495e;
    }
    span.my-history {
      display: flex;
      text-align: left;
      font-size: 24px;
    }
  }
  .qualities {
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__assurance {
      font-size: 24px;
      margin-top: 40px;
      color: #34495e;
    }
    &__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
      place-items: center;
      .quality-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        max-width: 280px;
        &__title {
          font-size: 32px;
          color: #34495e;
          margin-block: 20px 10px;
        }
        &__text {
          color: #34495e;
          text-align: center;
          font-size: 16px;
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
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;
    transition: all 0.2s linear;
    svg {
      fill: #41b883;
      transition: all 0.2s linear;
      width: 16px;
      height: 16px;
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
  min-height: 100vh;
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
    .title {
      font-size: 64px;
      color: white;
      font-weight: 400;
      .accent {
        color: #41b883;
      }
    }
    .subtitle {
      font-size: 64px;
      color: white;
      font-weight: 400;
    }
    button {
      margin-top: 32px;
      border: 2px solid white;
      background-color: transparent;
      color: white;
      padding: 16px 32px;
      border-radius: 5px;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s linear;
      svg {
        fill: #ffffff;
        transition: all 0.2s linear;
        width: 16px;
        height: 16px;
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