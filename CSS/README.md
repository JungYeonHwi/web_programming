# CSS

### 기초

#### 개요

- CSS란?

  - Cascading Style Sheets
  - 과거에는 디자인 정보를 HTML에 안에 포함 -> HTML 본연의 목적 (구조화된 문서) 상실
  - 디자인적 요소를 HTML과 완전히 분리시키기 위해 CSS 생성

- CSS을 HTML에 적용하는 방법
  - 인라인 스타일 : 태그 안에 적용
  - 내부 스타일 : HTML 안에 style 태그를 이용하여 적용
  - 외부 스타일 : CSS 파일 생성하여 HTML에 적용

#### 선택자

- 선택자

  | 선택자 종류   |          선택자 형태          |        선택자 예        |
  | ------------- | :---------------------------: | :---------------------: | ---------- | ------- |
  | 전체 선택자   |              \*               |           \*            |
  | 태그 선택자   |             태그              |           h1            |
  | 아이디 선택자 |            #아이디            |         #header         |
  | 클래스 선택자 |            .클래스            |          .item          |
  | 속성 선택자   |            [속성]             |         [type]          |
  | 속성 선택자   |           [속성=값]           |      [type=value]       |
  | 속성 선택자   |          [속성~=값]           |   [data-role~=value]    |
  | 속성 선택자   |             [속성             |          =값]           | [data-role | =value] |
  | 속성 선택자   |          [속성^=값]           |   [data-role^=-value]   |
  | 속성 선택자   |          [속성$=값]           |   [data-role$=-value]   |
  | 속성 선택자   |          [속성*=값]           |   [data-role*=-value]   |
  | 자손 선택자   |         선택자 선택자         |          div p          |
  | 자손 선택자   |        선택자 > 선택자        |         div > p         |
  | 형제 선택자   |        선택자 + 선택자        |        h1 + div         |
  | 형제 선택자   |        선택자 ~ 선택자        |        h1 ~ div         |
  | 링크 선택자   |             :link             |         a:link          |
  | 링크 선택자   |           :visited            |        a:visited        |
  | 부정 선택자   |      선택자:not(선택자)       |      li:not(.item)      |
  | 구조 선택자   |      선택자:first-child       |     li::first-child     |
  | 구조 선택자   |       선택자:last-child       |      li:last-child      |
  | 구조 선택자   |    선택자:nth-child(수열)     |   h1:nth-child(2n+1)    |
  | 구조 선택자   |  선택자:nth-last-child(수열)  |  h1:nth-last-child(2n)  |
  | 구조 선택자   |     선택자:first-of-type      |    h1:first-of-type     |
  | 구조 선택자   |      선택자:last-of-type      |     h1:last-of-type     |
  | 구조 선택자   |   선택자:nth-of-type(수열)    |  h1:nth-of-type(2n+1)   |
  | 구조 선택자   | 선택자:nth-last-of-type(수열) | h1:nth-last-of-type(2n) |
  | 반응 선택자   |         선택자:active         |       div:active        |
  | 반응 선택자   |         선택자:hover          |        div:hover        |
  | 반응 선택자   |         선택자:hover          |        div:hover        |
  | 상태 선택자   |           :checked            |      input:checked      |
  | 상태 선택자   |            :focus             |       input:focus       |
  | 상태 선택자   |           :enabled            |      input:enabled      |
  | 상태 선택자   |           :disabled           |     input:disabled      |
  | 문자 선택자   |        ::first-letter         |     p::first-letter     |
  | 문자 선택자   |         ::first-line          |      p::first-line      |
  | 문자 선택자   |            ::after            |        p::after         |
  | 문자 선택자   |           ::before            |        p::before        |
  | 문자 선택자   |          ::selection          |      p::selection       |

- 속성 선택자 비교 기호

  - [속성~=값] : 속성 값이 특정 값을 단어로 포함하는 요소 선택(단어 단위)
  - [속성|=값] : 속성 값이 특정 값을 포함하거나 특정 값 뒤에 하이픈 기호(-)로 시작하는 속성값을 포함하는 요소 선택(단어 단위)
  - [속성^=값] : 속성 값이 특정 값으로 시작되는 요소 선택
  - [속성$=값] : 속성 값이 특정 값으로 끝나는 요소 선택
  - [속성*=값] : 속성 값이 특정 값을 포함하는 요소 선택

- 상태 선택자

  - :checked : 체크 상태의 input 요소 선택
  - :focus : 초점이 맞춰진 input 요소 선택
  - :enabled : 사용 가능한 input 요소 선택
  - :disabled : 사용 불가능한 input 요소 선택

- 구조 선택자

  - :first-child : 형제 관계 중 첫 번째에 위치하는 요소 선택
  - :last-child : 형제 관계 중 마지막에 위치하는 요소 선택
  - :nth-child(수열) : 형제 관계 중 앞에서 수열 번째에 해당하는 요소 선택
  - :nth-last-child(수열) : 사용 불가능한 input 요소 선택
  - :first-of-type : 형제 관계 중 첫 번째로 등장하는 특정 요소 선택
  - :last-of-type : 형제 관계 중 마지막으로 등장하는 특정 요소 선택
  - :nth-of-type(수열) : 형제 관계 중 앞에서 수열 번째로 등장하는 특정 요소 선택
  - :nth-last-of-type(수열) : 형제 관계 중 뒤에서 수열 번째로 등장하는 특정 요소 선택

- 복합 선택자
  - 두 개 이상의 선택자가 결합된 형태
  - 여러 선택자를 결합하여 더 구체적인 요소를 선택하는 선택자

#### 선택자

- 스타일 적용 우선 순위
  - 스타일이 서로 충돌하는 경우 다음과 같은 우선순위에 의해 스타일이 적용
    1. 속성 값 뒤에 !important를 붙인 속성
    2. 인라인 스타일
    3. 아이디 선택자로 지정한 스타일
    4. 클래스 선택자로 지정한 스타일
    5. 태그 이름으로 지정한 스타일
    6. 상위 객체에 의한 상속된 스타일
  - 같은 우선수위의 경우 뒤에 적용된 스타일이 적용

---

### CSS 단위와 스타일 속성

#### 크기 단위

- % : 백분율 단위
- vh : 뷰포트 백분율 단위(높이)
- vw : 뷰포트 백분율 단위(너비)
- vmin : 뷰포트 백분위 단위(최소)
- vmax : 뷰포트 백분위 단위(최대)
- em : 배수 단위
- rem : 최상위 비교 배수 단위
- ch : 문자 개수 크기(4ch : 4개 문자 포함 크기)
- ex : 소문자의 높이값 (em의 절반값)
- px : 픽셀 단위 크기
- in : 인치 단위 크기
- pt : 포인트 단위 크기(1pt = 1/72in)
- pc : 파이카 단위 크기(1pc = 12pt = 1/6in)
- cm : cm 단위
- mm : mm 단위

#### 색상 단위

- 색상명 : black, blue 등
- #NNN, #NNNNNN : HEX 코드 단위
- rgb(red,green,blue) : RGB 색상 단위
- rgba(red,green,blue,alpha) : RGBA 색상 단위
- hsl(hue, saturation, lightness) : HSL 색상 단위
- hsla(bue, saturation, lightness, alpha) : HSLA 색상 단위

* Gradient
  - 선형 : linear-gradient() 함수 사용
  - 원형 : radial-gradient() 함수 사용

#### 스타일 속성

- background 관련 속성

  - background-color : 배경색 지정
  - background-image:url : 배경 이미지 지정
  - background-size: 배경 이미지의 크기
  - background-repeat : 배경 이미지의 반복 여부
  - background-attachment : 배경화면을 붙이는 방식
  - background-position : 배경 화면의 위치

- 폰트 관련 속성

  - font-size : 글자의 크기를 지정하는 스타일 속성
  - font-family : 폰트를 지정하는 속성, 두 단어 이상으로 된 폰트일 경우 큰 따옴표 ("")로 묶음, 폰트명을 콤마(,)로 구분하여 여러 개 나열 가능
  - font-style : 폰트의 기울기, 두께 조절을 위한 스타일 속성
  - font-weight : 폰트의 두께를 조절하기 위한 스타일 속성, 두께를 지원하지 않는 폰트는 적용이 안됨
  - line-height:글자가 차지하는 높이를 지정하는 속성이나 높이를 지정하기보다는 글자를 수직 중앙 정렬할 때 사용
  - text-align : 글자 정렬을 위한 속성
  - text-decoration : 글자의 밑줄과 관련된 속성
  - color : 글자의 색상 설정

- visibility 속성

  - visible : 요소를 보이게 함(기본값)
  - hidden : 요소를 보이지 않게 함

- opacity 속성

  - 요소의 투명도를 조절
  - 값의 범위 : 0.0~1.0
  - 0.0 : 투명한 상태
  - 1.0 : 불투명한 상태

- border 관련 속성

  - border-width : 테두리의 두께 지정
  - border-style : 테두리 선의 스타일 지정
  - border-color : 테두리의 색상 지정
  - border : 테두리 두께, 스타일, 색상을 한 번에 지정
  - border-radius : 테두리의 모서리를 둥글게 처리

- 그림자 속성
  - text-shadow : 선택된 요소의 글자에 그림자를 부여하는 속성
  - box-shadow : 선택된 요소의 박스에 그림자를 부여하는 속성
  - text-shadow와 box-shadow 속성은 콤마(,)로 구분하여 여러 그림자를 넣을 수 있음

---

### 박스 모델

- HTML의 각 요소는 사각형의 박스 모양으로 취급이 되며, margin, border, padding, content의 영역을 나뉨

  - mrgin : 다른 요소와 요소 사이의 간격
  - border : 요소의 외곽선
  - padding : 요소의 내용물과 박스 사이의 여백
  - content : 요소의 내용물이 차지하는 영역

- width/height 속성

  - inline 형태의 요소는 폭과 높이 지정 불가능

- box-sizing 속성
  - width와 height 속성이 적용되는 방식을 변경하는 속성
  - content-box : 요소 내의 content 크기를 기준으로 박스의 크기를 결정
  - border-box : 요소의 border를 기준으로 박스의 크기를 결정

---

### 레이아웃 관련 속성

- display 속성 : 요소가 화면에 어떻게 보여지게 하는가를 결정하는 속성

  - none
    - 선택된 요소를 화면에서 보이지 않게 함
    - visibility 속성에서 hidden을 줘도 요소가 안 보이지만 요소가 투명해질 뿐 사라지는 것은 아님
  - block
    - 선택된 요소를 block 형식으로 지정
    - block 형식의 요소는 위에서 아래로 쌓이는 형태로 화면에 나타남
    - block 형식은 width와 height 속성이 적용됨
  - inline
    - 선택된 요소를 inline 형식으로 지정
    - inline 형식의 요소는 옆으로 나열되는 형태로 화면에 나타남
    - inline 형식은 width, height 속성 및 상하 margin 속성이 적용되지 않음
  - inline-block
    - 선택된 요소를 inline-block 형식으로 지정
    - inline-block 형식의 요소는 옆으로 나열되는 형태로 화면에 나타남
    - inline-block 형식은 width와 height 속성이 적용됨
  - felx : 선택된 요소를 block-level의 flex 컨테이너로 지정
  - inline-flex : 선택된 요소를 inline-level의 flex 컨테이너로 지정
  - grid : 선택된 요소를 block-level의 grid 컨테이너로 지정
  - inline-grid : 선택된 요소를 inline-level의 grid 컨테이너로 지정
  - list-item : 선택된 요소를 <li>와 같이 동작하도록 지정
  - table : 선택된 요소를 <table>과 같이 동작하도록 지정
  - table-caption : 선택된 요소를 <caption>과 같이 동작하도록 지정
  - table-column-group : 선택된 요소를 <colgroup>과 같이 동작하도록 지정
  - table-header-group : 선택된 요소를 <thead>와 같이 동작하도록 지정
  - table-footer-group : 선택된 요소를 <tfoot>과 같이 동작하도록 지정
  - table-row-group : 선택된 요소를 <tbody>와 같이 동작하도록 지정
  - table-cell : 선택된 요소를 <td>와 같이 동작하도록 지정
  - table-column : 선택된 요소를 <col>과 같이 동작하도록 지정
  - table-row : 선택된 요소를 <tr>과 같이 동작하도록 지정

- 위치 관련 속성

  - position 속성
    - 요소의 위치 설정을 지정하는 속성
    - 지정 가능한 속성값
      - static(기본값) : 요소가 순서대로 배치, direction 속성을 추가로 사용하여 좌에서 우, 우에서 좌로 배치되는 순서 변경 가능
      - absolute : 부모 요소를 기준으로 절대 위치 좌표를 설정
      - fixed : 화면을 기준으로 절대 위치 좌표 설정
      - relative : 초기 위치 상태를 기준으로 위치 좌표 설정
  - top, bottom, left, right 속성
    - 상, 하, 좌, 우의 위치를 지정하는 속성
    - position 속성값에 따라 적용되는 기준이 달라짐
  - z-index 속성 : 두 요소가 겹칠 경우 화면의 위로 쌓이는 위치를 지정

  * overflow 속성

    - overflow 속성은 요소 내부의 내용물(자식 요소 포함)의 크기를 넘을 경우 어떻게 처리할 지 결정
    - overflow 속성의 종류
      - overflow-x : 내부의 내용물이 가로 방향으로 넘을 경우 처리 지정
      - overflow-y : 내부의 내용물이 세로 방향으로 넘을 경우 처리 지정
      - overflow : 가로, 세로 방향 모두 처리
    - overflow 속성값
      - hidden : 영역을 벗어나는 부분을 보이지 않게 함
      - scroll : 내부 내용물이 박스 범위를 벗어나면 스크롤이 될 수 있도록 함

  * flow 속성
    - float 속성이 있는 요소는 다른 요소의 정상적인 흐름에서 벗어나 왼쪽 또는 오른쪽으로 부유하게 됨
    - float 속성값
      - left : 선택된 요소가 왼쪽으로 부유하게 됨
      - right : 선택된 요소가 오른쪽으로 부유하게 됨

---

### Flex 박스와 Grid

#### Flex 박스

- flex 박스 인터페이스 내의 아이템 간 공간 배분과 정렬 기능을 제공하기 위한 1차원 레이아웃 모델
- display 속성이 flex일 경우 해당 요소는 flex box로 지정됨
- flex box의 자식 요소들은 flex item이 됨
- flex 박스가 가질 수 있는 속성
  - flex-direction
  - justify-content
  - align-items
  - flex-wrap
  - algin-content
- flex item이 가질 수 있는 속성
  - order
  - margin 속성값이 aut일 경우 flex item들이 배치되고 남은 공간을 나눠서 margin을 배분
  - align-self

#### Grid

- Grid는 인터페이스 내의 아이템 간 공간 배분과 정렬 기능을 제공하기 위한 2차원 레이아웃 모델
- display 속성이 grid일 경우 해당 요소는 grid containeer로 지정됨
- Grid container의 자식 요소들은 grid item이 됨
- Grid container가 가질 수 있는 속성
  - grid-template-rows : 명시적 행(track)의 크기 지정
  - grid-template-columns : 명시적 열(track)의 크기 지정
  - grid-template-area : 영역(area) 이름을 참조해 템플릿 생성
  - grid-template : grid-template-rows와 grid-template-columns를 한 번에 지정
  - grid-auto-rows : 암시적인 행의 크기 지정
  - grid-auto-columns : 암시적인 열의 크기 지정
  - grid-auto-flow : 자동 배치 알고리즘 방식 정의
    - row 속성 : 각 행 축을 따라 차례로 배치 (기본값)
    - column 속성 : 각 열 축을 따라 차례로 배치
    - row dense 속성 : 각 행 축을 따라 차례로 배치하되, 빈 영역을 매움
    - column dense 속성 : 각 열 축을 따라 차례로 배치하되, 빈 영역을 매움
  - grid : grid-template-rows, grid-template-columns, grid-auto-rows, grid-auto-columns를 한번에 지정
  - row-gap(grid-row-gap) : 행과 행 사이의 간격(line) 지정
  - column-gap(grid-column-gap) : 열과 열 사이의 간격(line) 지정
  - gap(grid-gap) : row-gap과 column-gap을 한 번에 지정
  - align-content : grid 콘텐츠의 수직 축 정렬
    - normal 속성 : strech와 동일
    - start 속성 : 시작점(위쪽)으로 정렬
    - center 속성 : 수직 가운데로 정렬
    - end 속성 : 끝점(아래쪽)으로 정렬
    - space-around 속성 : 각 행을 위 아래로 여백을 고르게 정렬
    - space-between 속성 : 첫 행은 시작점에 끝 행은 끝점에 정렬하고 나머지는 고르게 정렬
    - space-evenly 속성 값 : 모든 여백을 고르게 정렬
    - strech 속성 : 수직 축을 채우기 위해 grid의 콘텐츠를 늘림
  - justify-content : grid 콘텐츠의 수평 축 정렬 (속성값은 align-content와 동일하나 방향이 수평)
  - place-content : align-content와 justify-content를 한 번에 지정
  - align-items : grid item들의 수직 축 정렬
    - normal 속성 : strech와 동일
    - start 속성 : 시작점(위쪽)으로 정렬
    - center 속성 : 수직 가운데로 정렬
    - end 속성 : 끝점(아래쪽)으로 정렬
    - strech : 수직 축을 채우기 위해 grid의 콘텐츠를 늘림
  - justify-items : grid item들의 수평 축 정렬 (속성값은 align-items와 동일하나 방향이 수평)
  - place-items : algin-items와 justify-items를 한 번에 지정
- Grid item이 가질 수 있는 속성
  - grid-row-start : grid item의 행 시작 위치 지정
  - grid-row-end : grid item의 행 끝 위치 지정
  - grid-row : grid-row-start와 grid-row-end를 한 번에 지정
  - grid-column-start : grid item의 열 시작 위치 지정
  - grid-column-end : grid item의 열 끝 위치 지정
  - grid-column : grid-column-start와 grid-column-end를 한 번에 지정
  - grid-area : 영역 이름을 설정하거나, grid-row와 grid-column을 한 번에 지정
  - align-self : 단일 grid item을 수직 축 정렬
  - justify-self : 단일 grid item을 수평 축 정렬
  - place-self : align-self와 justify-self를 한 번에 지정
  - order : grid item의 배치 순서 지정 (기본 값은 0)
  - z-index : grid item의 쌓이는 순서 지정
- Grid 관련 용어 정리
  - Track: 하나의 행(row) 또는 열(Column)을 의미
  - Line(Gutter): 트랙과 트랙 사이의 간격
  - Cell: grid item이 배치되는 최소 단위의 영역
  - Area: grid item이 배치되는 하나 이상의 cell로 이루어진 영역(실제 grid item이 배치되는 영역)

---

### transition

#### transition 관련 속성

- transition 관련 속성 정리
  - transition : 모든 transition 관련 속성의 단축 속성
  - transition-delay : 이벤트 발생 후 몇 초 후에 재생할지 지정
  - transition-duration : 몇 초 동안 재생할지 지정
  - transition-property : 어떤 속성을 변형할지 지정
  - transition-timing-funtion : 수치 변형 함수 지정
- transition 관련 속성들은 HTML 요소의 스타일 속성(크기, 색상 등)에 변화가 생길 때, 부드럽게 변화를 시킬 수 있도록 하는 속성
- 매우 쉽게 애니메이션이 적용되는 효과를 볼 수 있음

#### transition 속성이 적용되는 스타일 속성

- 위치 속성 : top, left, bottom, right
- 크기 속성 : width, height
- 박스 속성 : margin, padding
- 테두리 속성 : border-width, border-radius, border-color
- 색상 속성 : color, background-color
- 투명도 속성 : opacity
- 변호나 속성 : transform
