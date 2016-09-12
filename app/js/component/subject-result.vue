<template>
    <card>
        <label :class="subjectList.length != 0 ? 'card-title' : ''">共&nbsp4&nbsp;条专题搜索结果</label>    
        <article class="subject">
            <header>
                <h1  class="title"><a>标题</a></h1>
            </header>
            <section class="summary">
                热带气旋(Tropical Cyclone)是发生在热带、亚热带洋面上的由水蒸气冷却凝固时放出潜热发展而出的具有有组织对流和暖心结构的强烈低压涡旋。在北半球的热带气旋绕中心呈逆时针方向旋转。由于在移动时像陀螺
            </section>
            <footer class="footer">
                <div class="article-info">
                    <i><span class="glyphicon-fire glyphicon"></span></i>
                    <a class="article-classify">2,133</a>
                </div>
            </footer>
        </article>
    </card>
</template>

<script>
    import card from './card.vue'
    import {
        getLang
    } from '../vuex/getter/getters'

    export default {
        data() {
                return {
                    subjectList: []
                }
            },
            components: {
                card
            }
    }
</script>

<style lang="sass" scoped>
    @import "../../css/color";
    @import "../../css/util";
    label {
        margin-bottom: 0;
    }
    
    .card-title {
        margin-bottom: 10px;
    }
    
    .subject {
        padding: 2px 0;
        .title {
            margin: 0;
            font-size: 22px;
            font-weight: normal;
            a {
                cursor: pointer;
                color: $text-black;
            }
            a:hover {
                color: $primary-color;
            }
            a:visited {
                color: $visited-link;
            }
        }
        .summary {
            margin: 10px 0;
            font-weight: lighter;
            font-size: 14px;
            color: $text-black;
        }
        .footer {
            margin-top: 10px;
            color: $subject-footer;

            a {
                color: $subject-footer;
                font-size: 14px;
            }
        }
    }
</style>