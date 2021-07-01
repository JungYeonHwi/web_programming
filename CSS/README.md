# CSS

### 기초 ###

#### 개요 ####

* CSS란?
  + Cascading Style Sheets
  + 과거에는 디자인 정보를 HTML에 안에 포함 -> HTML 본연의 목적 (구조화된 문서) 상실
  + 디자인적 요소를 HTML과 완전히 분리시키기 위해 CSS 생성

* CSS을 HTML에 적용하는 방법
  + 인라인 스타일 : 태그 안에 적용
  + 내부 스타일 : HTML 안에 style 태그를 이용하여 적용
  + 외부 스타일 : CSS 파일 생성하여 HTML에 적용

#### 선택자 ####

* 선택자

  | 선택자 종류 | 선택자 형태 | 선택자 예 |
  |---|:---:|:--:|
  | 전체 선택자 | * | * | 
  | 태그 선택자 | 태그 | h1 | 
  | 아이디 선택자 | #아이디 | #header |
  | 클래스 선택자 | .클래스 | .item |
  | 속성 선택자 | [속성] | [type] | 
  | 속성 선택자 | [속성=값] | [type=value] |
  | 속성 선택자 | [속성~=값] | [data-role~=value] |
  | 속성 선택자 | [속성|=값] | [data-role|=value] |
  | 속성 선택자 | [속성^=값] | [data-role^=-value] |
  | 속성 선택자 | [속성$=값] | [data-role$=-value] |
  | 속성 선택자 | [속성*=값] | [data-role*=-value] |
  | 자손 선택자 | 선택자 선택자 | div p | 
  | 자손 선택자 | 선택자 > 선택자 | div > p | 
  | 형제 선택자 | 선택자 + 선택자 | h1 + div |
  | 형제 선택자 | 선택자 ~ 선택자 | h1 ~ div |  
  | 링크 선택자 | :link | a:link |  
  | 링크 선택자 | :visited | a:visited |
  | 부정 선택자 | 선택자:not(선택자) | li:not(.item) |
  | 구조 선택자 | 선택자:first-child | li::first-child |
  | 구조 선택자 | 선택자:last-child | li:last-child |
  | 구조 선택자 | 선택자:nth-child(수열) | h1:nth-child(2n+1) |
  | 구조 선택자 | 선택자:nth-last-child(수열) | h1:nth-last-child(2n) |
  | 구조 선택자 | 선택자:first-of-type | h1:first-of-type |
  | 구조 선택자 | 선택자:last-of-type | h1:last-of-type |
  | 구조 선택자 | 선택자:nth-of-type(수열) | h1:nth-of-type(2n+1) |
  | 구조 선택자 | 선택자:nth-last-of-type(수열) | h1:nth-last-of-type(2n) |
  | 반응 선택자 | 선택자:active | div:active |  
  | 반응 선택자 | 선택자:hover | div:hover |  
  | 반응 선택자 | 선택자:hover | div:hover |  
  | 상태 선택자 | :checked | input:checked |  
  | 상태 선택자 | :focus | input:focus |  
  | 상태 선택자 | :enabled | input:enabled |  
  | 상태 선택자 | :disabled | input:disabled | 
  | 문자 선택자 | ::first-letter | p::first-letter |
  | 문자 선택자 | ::first-line | p::first-line |
  | 문자 선택자 | ::after | p::after |
  | 문자 선택자 | ::before | p::before |
  | 문자 선택자 | ::selection | p::selection |

* 속성 선택자 비교 기호

  | 선택자 형태 | 설명 |
  |---|:---:|
  | [속성~=값] | 속성 값이 특정 값을 단어로 포함하는 요소 선택(단어 단위) |
  | [속성|=값] | 속성 값이 특정 값을 포함하거나 특정 값 뒤에 하이픈 기호(-)로 시작하는 속성값을 포함하는 요소 선택(단어 단위) |
  | [속성^=값] | 속성 값이 특정 값으로 시작되는 요소 선택 |
  | [속성$=값] | 속성 값이 특정 값으로 끝나는 요소 선택 |
  | [속성*=값] | 속성 값이 특정 값을 포함하는 요소 선택 |

* 상태 선택자

  | 선택자 형태 | 설명 |
  |---|:---:|
  | :checked | 체크 상태의 input 요소 선택 |
  | :focus | 초점이 맞춰진 input 요소 선택 |
  | :enabled | 사용 가능한 input 요소 선택 |
  | :disabled | 사용 불가능한 input 요소 선택 |

* 구조 선택자

  | 선택자 형태 | 설명 |
  |---|:---:|
  | :first-child | 형제 관계 중 첫 번째에 위치하는 요소 선택 |
  | :last-child | 형제 관계 중 마지막에 위치하는 요소 선택 |
  | :nth-child(수열) | 형제 관계 중 앞에서 수열 번째에 해당하는 요소 선택 |
  | :nth-last-child(수열) | 사용 불가능한 input 요소 선택 |
  | :first-of-type | 형제 관계 중 첫 번째로 등장하는 특정 요소 선택 |
  | :last-of-type | 형제 관계 중 마지막으로 등장하는 특정 요소 선택 |
  | :nth-of-type(수열) | 형제 관계 중 앞에서 수열 번째로 등장하는 특정 요소 선택 |
  | :nth-last-of-type(수열) | 형제 관계 중 뒤에서 수열 번째로 등장하는 특정 요소 선택 |

* 복합 선택자
  + 두 개 이상의 선택자가 결합된 형태
  + 여러 선택자를 결합하여 더 구체적인 요소를 선택하는 선택자

#### 선택자 ####

* 스타일 적용 우선 순위
  + 스타일이 서로 충돌하는 경우 다음과 같은 우선순위에 의해 스타일이 적용
    1. 속성 값 뒤에 !important를 붙인 속성
    2. 인라인 스타일
    3. 아이디 선택자로 지정한 스타일
    4. 클래스 선택자로 지정한 스타일
    5. 태그 이름으로 지정한 스타일
    6. 상위 객체에 의한 상속된 스타일
  + 같은 우선수위의 경우 뒤에 적용된 스타일이 적용
  ---------------------------------------

### CSS 단위와 스타일 속성 ###

#### 크기 단위 ####

  | 단위 | 설명 |
  |---|:---:|
  | % | 백분율 단위 |
  | vh | 뷰포트 백분율 단위(높이) |
  | vw | 뷰포트 백분율 단위(너비) |
  | vmin | 뷰포트 백분위 단위(최소) |
  | vmax | 뷰포트 백분위 단위(최대) |
  | em | 배수 단위 |
  | rem | 최상위 비교 배수 단위 |
  | ch | 문자 개수 크기(4ch : 4개 문자 포함 크기)
  | ex | 소문자의 높이값 (em의 절반값) |
  | px | 픽셀 단위 크기 |
  | in | 인치 단위 크기 |
  | pt | 포인트 단위 크기(1pt = 1/72in) |
  | pc | 파이카 단위 크기(1pc = 12pt = 1/6in) |
  | cm | cm 단위 |
  | mm | mm 단위 |

#### 색상 단위 ####

  | 단위 | 설명 |
  |---|:---:|
  | 색상명 | black, blue 등 |
  | #NNN, #NNNNNN | HEX 코드 단위 |
  | rgb(red,green,blue) | RGB 색상 단위 |
  | rgba(red,green,blue,alpha) | RGBA 색상 단위 |
  | hsl(hue, saturation, lightness) | HSL 색상 단위 |
  | hsla(bue, saturation, lightness, alpha) | HSLA 색상 단위 |

* Gradient
  + 선형 : linear-gradient() 함수 사용
  + 원형 : radial-gradient() 함수 사용

#### 스타일 속성 ####

* background 관련 속성
  + background-color : <color> 