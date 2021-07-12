# node

### Node.js란?

#### 장단점

|                      장점                       |                     단점                     |
| :---------------------------------------------: | :------------------------------------------: |
| 멀티 스레드 방식에 비해 컴퓨터 자원을 적게 사용 |    싱글 스레드라서 CPU 코어를 하나만 사용    |
|           I/O 작업이 많은 서버로 적합           |       CPU 작업이 많은 서버로는 부적합        |
|            멀티 스레드 방식보다 쉬움            | 하나뿐인 스레드가 멈추지 않도록 관리해야 함  |
|             웹 서버가 내장되어 있음             | 서버 규모가 커졌을 때 서버를 관리하기 어려움 |
|               자바스크립트를 사용               |                어중간한 성능                 |
|            JSON 형식과 호환하기 쉬움            |

#### Node.js 모듈

- 노드는 코드를 모듈로 만들 수 있음
  - 모듈이란 특정한 기능을 하는 함수나 변수들의 집합
  - 모듈은 프로그램의 재사용성을 높여줌
  - 일반적으로 파일 하나가 하나의 모듈

#### Built-in Objects & Modules

- global 객체

  - 브라우저의 전역 객체는 window이지만 node 환경에서는 global이 역할을 수행
  - window.document에서 window를 생략하여 그냥 document를 사용할 수 있는 것처럼 노드에서도 global 생략 가능
  - global 객체에 속성을 추가하면 전역에서 message 속성 값을 사용할 수 있지만, global에 속성을 추가하는 것을 남용하는 것은 프로그램의 유지보수를 어렵게 함

- console

  - 웹브라우저에서 사용했던 console 객체와 거의 같으며, global 객체에 포함되어 있음
  - console 객체는 주로 디버깅을 위해 사용
  - console 객체의 메서드 : console.log(내용), console.error(에러 내용), console.dir(객체, 옵션), console.table(객체의 배열), console.time(레이블), console.timeEnd(레이블), console.trace(레이블) 등

- 타이머

  - setTimeout(callback, ms) : ms(밀리초) 이후 callback 함수 실행
  - setInterval(callback, ms) : ms(밀리초)마다 callback 함수 실행
  - setImmediate(callback) : (main 스레드에서 실행 되는 코드가 끝난 후) callback을 즉시 실행
  - clearTimeout(id) : setTimeout을 취소
  - clearInterval(id) : setInterval을 취소
  - clearImmediate(id) : setImmediate를 취소

- **filename, **dirname

  - 노드에서 파일 사이에 모듈 관계가 있는 경우가 많아 현재 파일의 디렉터리 위치나 파일 경로를 알아야 하는 경우가 있음
  - **filename은 현재 파일에 대한 경로가 저장되어 있으며 **dirname은 현재 파일이 있는 디렉터리의 경로가 저장

- process

  - 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있는 객체
  - process.env: 시스템의 환경 변수 정보
  - process.exit(code): 실행 중인 노드 프로세스를 종료

- os 모듈

  - 운영 체제의 정보와 관련된 모듈
  - 모듈이기 때문에 const os = require('os')와 같이 require() 함수로 모듈을 가져와서 사용
  - os.arch(): 시스템의 CPU 아키텍처 정보(arm, arm64, x32, x64 등) 리턴
  - os.platform(): 운영체제 정보(linux, win32 등)
  - os.type(): 운영체제의 종류
  - os.uptime(): 운영체제 부팅 이후 흐른 시간(초), (cf. process.uptime()은 노드 프로세스 실행 시간)
  - os.hostname(): 컴퓨터의 이름
  - os.release(): 운영체제의 버전
  - os.homedir(): 홈 디렉터리 경로
  - os.tmpdir(): 임시 파일 저장 경로
  - os.cpus(): 컴퓨터의 코어 정보
  - os.freemem(): 사용 가능한 메모리(RAM)
  - os.totalmem(): 전체 메모리 용량

- path 모듈
  - 디렉터리와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
  - path가 필요한 이유는 운영체제마다 경로 구분자가 다르기 때문
  - path.sep: 경로의 구분자(Windows는 \, POSIX는 /)
  - path.delimiter: 환경변수의 구분자(Windows는 ;, POSIX는 :)
  - path.dirname(경로): 파일이 위치한 폴더 경로 리턴
  - path.extname(경로): 파일의 확장자 리턴
  - path.basename(경로, 확장자): 파일의 이름(확장자 포함) 리턴, 파일의 이름만 표시하고 싶은 경우 두 번째 인자로 파일의 확장자를 넣으면 됨
  - path.parse(경로): 파일 경로를 root, dir, base, ext, name으로 분리
  - path.format(객체): path.parse()한 객체를 다시 하나의 경로로 합침
  - path.normalize(경로): /나 \를 실수로 여러 번 사용하거나 혼용하였을 경우 정상적인 경로로 변환
  - path.isAbsolute(경로): 파일의 경로가 절대 경로인지 체크
  - path.relative(기준경로, 비교경로): 첫 번째 경로에서 두 번째 경로로 가능 방법 리턴
  - path.join(경로, ...): 여러 인자를 넣으면 하나의 경로로 합쳐 중(상대 경로 .., .도 처리)
  - path.resolve(경로, ...): path.join()과 유사하지만 여러 경로를 합치는 중 /를 만나면 절대경로로 인식하여 앞에 나온 경로들을 무시

#### http 모듈로 웹 서버 구현

- 서버들은 보통 80 포트로 이미 다른 서비스를 사용하고 있는 경우가 많으며, 리눅스와 macOS에서는 1024번 이하의 포트에 연결할 때는 관리자 권한이 필요
- 시스템에서 이미 사용하는 포트는 사용할 수 없으며, 다른 서비스와 포트가 충돌이 나는 경우 Error: listen EADDRINUSE 와 같은 에러 발생

---

### NPM & package.json

#### NPM

- npm은 이름 그대로 노드 패키지 매니저
- 대부분의 자바스크립트 프로그램은 패키지로 npm 레지스트리에 등록되어 있으며, 필요한 패키지를 npm 레지스트리에서 찾아 설치하여 사용
- npm 레지스트리에 업로드된 노드 모듈을 패키지라 부름
- npm 레지스트리에는 100만개 이상의 패키지가 등록되어 있으며 세계에서 가장 큰 소프트웨어 레지스트리

#### package.json

- 노드로 개발할 때 필요한 패키지를 설치하여 사용하게 되는데 이때 패키지별로 의존관계 관리에 대한 문제가 발생
  - 외부 패키지를 사용하여 개발하고 있는 프로그램에서 사용하는 패키지에 대한 관리가 필요
  - 패키지별로 고유한 버전이 있으며, 버전이 다를 경우 문제가 발생할 수 있음
- package.json은 설치한 패키지에 대한 의존관계를 관리하는 파일

#### npm으로 패키지 설치

- package.json을 생성했다면 npm install 명령으로 패키지를 설치 : package.json을 생성하지 않고도 설치가 가능하지만 의존관계가 기록되지 않음
- npm install 명령 (npm i 명령과 동일)
  - 형식: npm install [--save 또는 --save-dev] <패키지명>[@버전]
  - --save 옵션은 package.json에 의존관계(dependencies)를 추가하는 옵션(npm 5버전부터 기본값)
  - --seve-dev(-D) 옵션은 package.json에 개발용 의존관계(devDependencies)를 추가하는 옵션
  - npm install 다음에 여러 개의 패키지를 공백으로 나열하면 한번에 설치
- package.json에 작성된 의존관계 패키지 모두 설치
  - package.json에 의존관계가 작성되어 있을 경우 아무런 인자 없이 npm install 명령을 입력하면 package.json에 있는 의존 패키지들이 모두 설치됨
  - 따라서, package.json만 git 저장소에 업로드해두면 추후 의존관계를 npm install 명령으로 설치만 하면 됨
- 전역 패키지 설치
  - 전역 패키지는 시스템에 설치하는 패키지이며 npm install --global <패키지명>으로 설치 가능
  - --global 옵션은 -g로 사용 가능
  - 시스템에 따라 전역 설치에 관리자 권한이 필요할 수도 있음
  - 전역으로 설치한 경우 해당 패키지를 터미널에서 명령어로 사용이 가능
  - 전역으로 설치한 패키지는 package.json에 기록되지 않음
- npx 명령
  - 전역 설치의 경우 package.json에 기록이 되지 않고, 다른 시스템에서 다시 개발을 할 경우 다시 설치를 해야 하는 문제로 전역설치를 하지 않고 사용하는 경우도 있음
  - 이런 경우 전역에 설치하지 않고, 일반적으로 개발 의존성에 추가(-D)하여 설치하고 npx 명령으로 해당 명령을 수행
- package.json의 scripts
  - package.json의 scripts 에 명령을 추가하면 npm run <스크립트명>으로 해당 명령을 실행할 수 있음
  - scripts로 사용하는 명령은 npx를 사용하지 않고도 명령 수행이 가능

#### 패키지 버전

- 노드 패키지의 버전은 .으로 구분된 세 개의 숫자로 구성 : SemVer
  - 패키지마다 버전이 다르고 패키지 간의 의존관계도 복잡
  - 어떤 패키지가 업그레이드가 되었을 경우 이 패키지를 사용하는 다른 패키지에 문제가 발생할 수 있음
  - 이러한 문제를 해결하기 위한 버저닝 규칙으로 SemVer이 등장
  - SemVer의 형식
    - <Major> : 하위 호환이 되지 않는 변경 사항
    - <Minor> : 하위 호환이 되는 변경 사항
    - <Patch> : 간단한 버그 수정
- npm install 시 또는 package.json의 의존 패키지의 버전 앞의 기호 의미
  - ^: minor 버전까지만 설치 또는 업데이트(예: npm i express@^1.1.1  1.1.1 <= version < 2.0.0)
  - ~: patch 버전까지만 설치 또는 업데이트
  - > , <, >=, <=, =: 초과, 미만, 이상, 이하, 동일
  - @latest 또는 @x: 최신 버전의 패키지(예: npm i express@latest 또는 npm i express@x)

#### 기타 npm 명령어

- npm outdated
  - 시간이 지나면 설치한 패키지의 버전이 업그레이드가 될 수 있음
  - npm outdated 명령어로 업데이트 가능한 패키지가 있는지 확인 가능
  - Current와 Wanted가 다르면 업데이트가 필요한 경우
- npm uninstall <패키지명>
  - 설치된 패키지를 제거하는 명령
  - 패키지가 node_modules 디렉터리와 package.json에서 제거됨
  - npm rm <패키지명>으로 줄여 쓸 수 있음
  - 전역 패키지를 제거할 경우 -g 옵션을 주어야 함
- npm search [검색어] : npm 패키지를 검색어를 이용하여 검색
- npm info <패키지명> : 패키지의 상세 정보를 알고 싶을 때 사용하는 명령
- npm adduser : npm에 로그인하기 위한 명령(npm에 회원가입이 되어 있어야 함)
- npm whoami : npm adduser 명령으로 현재 로그인한 사용자가 누구인지 알려줌
- npm logout : npm adduser로 로그인한 계정을 로그아웃
- npm version <버전|major|minor|patch>
  - package.json의 버전을 올려 줌
  - 버전을 명시하면 해당 버전으로 변경, major, minor, patch를 중 하나를 넣으면 해당 버전을 1 올림
- npm deprecate <패키지명><버전> [메시지]
  - 로그인이 필요하며, 자신이 만든 패키지 중 해당 패키지가 deprecate되었다고 알려줌
  - 메시지는 해당 패키지를 설치할 때 경고 메시지
- npm publish
  - npm 레지스트리에 자신의 패키지를 배포할 때 사용
  - 배포를 하기 위해서는 로그인이 필요
  - 배포시 주의할 점은 보안에 민감한 정보가 배포가 되지 않도록 주의
  - npm 레지스트리에 이미 등록된 이름은 사용할 수 없음(package.json의 name 값의 이름으로 배포)
- npm unpublish <패키지명> [--force]
  - 배포한 패키지를 npm 레지스트리에서 제거할 때 사용
  - 24시간 이내에 배포한 패키지만 제거 가능(다른 사람이 배포한 패키지를 사용할 수 있기 때문)

---

### EXpress 프레임워크

-
