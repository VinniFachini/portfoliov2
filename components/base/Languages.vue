<template>
    <div class="languages-container">
        <img src="assets/languages.svg" />
        <ul class="select-language">
            <li class="pt-br">
                <img src="assets/brazil.svg" />
                <span class="language">pt-BR</span>
            </li>
            <li class="en-us">
                <img src="assets/usa.svg" />
                <span class="language">en-US</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.languages-container {
    img {
        cursor: pointer;
    }
    img:hover {
        & + .select-language {
            visibility: visible;
            opacity: 1;
        }
    }
    position: relative;
    .select-language {
        transition: all .2s linear;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 20px;
        padding-top: 20px;
        right: 0;
        width: 130px;
        &:hover {
            visibility: visible;
            opacity: 1;
        }
        li {
            background-color: white;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            gap: 10px;
            &:hover {
                background-color: #f1f1f1;
            }
            img {
                width: 30px;
            }
            &:nth-child(1) {
                border-radius: 5px 5px 0 0;
            }
            &:nth-child(2) {
                border-radius: 0 0 5px 5px;
            }
        }
    }
}
</style>