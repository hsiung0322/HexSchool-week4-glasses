###### tags: `網頁切版直播班 - 2021 夏季班`
# 第四週：work

[設計稿](https://xd.adobe.com/view/d3d1119a-affd-4f48-8188-f070932224af-8682/screen/9030f53b-bb49-44c3-8d71-9901ad0d5206/specs/)
[GitHub Repo](https://github.com/hsiung0322/HexSchool-week4-glasses/tree/master/app)
[GitHub Pages](https://hsiung0322.github.io/HexSchool-week4-glasses/)

## 思考共同設定
- container

    pc → 1110px + 15px*2(left, right 各15px `gutter`)

    pad → 690px + 15px*2

    mobile → 345px + 15px*2

    ```scss
    // pc
    .container{
    	max-width: 1140px;
    	padding: 0 15px;
    	margin: 0 auto;
    	@media (max-width: 992px){ //pad
    		max-width: 720px;
    	}
    	@media (max-width: 767px){ //mobile
    			max-width: 720px;
    		}
    }

    ```

- font-size 48px 36px 24px 20px 16px 14px

    ```scss
    .nav a{
    	pc 20px
    	pad 20px
      moblie 20px
    }

    h2, .h2, .solgan{
    	64px | 48px | 32px;
    	span{
    	36px | 20px | 16px
    	}
    }
    h3, .h3, .title{
    	48px | 32px | 24px
    }
    ```

- color

    ```scss
    $red: #AA0601; //bg-primary
    $white :#FFF;
    $brown: #650300; //text-primary , btn-hover
    $pink: #FBF2F2; //背景粉
    $black: #000;
    $black-300: #212529;
    $gray: #707070;
    ```

- common

    menu

    list

---

## 每日任務

- 7/26 - 錨點連結

    > 網頁中的 id 在實務上不會拿來寫樣式用，但是他卻有個神奇功能，錨點。他能讓你的網頁在內部自由的跳轉

    - codepen: [https://codepen.io/hsiungchi/pen/LYyejoY](https://codepen.io/hsiungchi/pen/LYyejoY)
- 7/28 css → scss
    - [https://codepen.io/hsiungchi/pen/WNjMWEw](https://codepen.io/hsiungchi/pen/WNjMWEw)