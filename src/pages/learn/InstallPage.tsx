// import { useTheme } from '@mui/material';
import DocPage from '@/components/DocPage/DocPage';
import Callout from '@/components/DocPage/Callout';
import CodeBlock from '@/components/DocPage/CodeBlock';



export default function InstallPage() {
  // const theme = useTheme();

  return (
    <DocPage
      title="설치하기"
      description="React는 처음부터 점진적으로 채택할 수 있도록 설계되었습니다. 새로운 앱을 만드는 방법부터 기존 프로젝트에 React를 추가하는 방법까지 살펴봅니다."
      badge="설치하기"
    >
      <h2>새로운 React 앱 만들기</h2>
      <Callout type="note" title="풀스택 프레임워크에는 서버가 필요하지 않습니다">
        <p>
          이 페이지의 모든 프레임워크는 클라이언트 측 렌더링(CSR), 단일 페이지 앱(SPA), 정적 사이트 생성(SSG)을
          지원합니다. 이러한 앱은 서버 없이 CDN 또는 정적 호스팅 서비스에 배포할 수 있습니다. 또한 이러한
          프레임워크를 사용하면 사용 사례에 적합한 경우 경로별로 서버 측 렌더링을 추가할 수 있습니다.
        </p>
        <p>
          이렇게 하면 클라이언트 전용 앱으로 시작할 수 있으며, 나중에 요구 사항이 변경되는 경우 앱을 다시
          작성하지 않고도 개별 경로에서 서버 기능을 사용하도록 선택할 수 있습니다.
        </p>
      </Callout>

      <h2>처음부터 React 앱 만들기</h2>
      <p>
        앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임워크를 구축하는 것을
        선호하거나, React 앱의 기본 사항만 배우려는 경우 React 앱을 처음부터 빌드할 수 있습니다.
      </p>

      <h3>Step 1: 빌드 툴 설치하기</h3>
      <p>
        첫 번째 단계는 vite, parcel 또는 rsbuild 같은 빌드 툴을 설치하는 것입니다. 빌드 툴은 소스 코드를
        패키징하고 실행하는 기능을 제공하며, 로컬 개발을 위한 개발 서버와 앱을 프로덕션 서버에 배포하기 위한
        빌드 명령어를 제공합니다.
      </p>

      <h4>Vite</h4>
      <p>
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a>는 모던 웹 프로젝트에서
        빠르고 간결한 개발 환경을 제공하는 것을 목표로 하는 빌드 도구입니다.
      </p>
      <CodeBlock code="npm create vite@latest my-app -- --template react-ts" language="bash" />
      <p>
        Vite는 명확한 특성을 보이며, 별도의 설정 없이도 합리적인 기본값을 제공합니다. Vite는 빠른 새로고침,
        JSX, Babel/SWC 등과 같은 일반적인 기능을 지원하는 풍부한 플러그인 생태계를 가지고 있습니다.
      </p>

      <h3>Step 2: 일반적인 애플리케이션 패턴 구축</h3>
      <p>
        위에서 언급한 빌드 도구들은 클라이언트 전용의 단일 페이지 앱(SPA)으로 시작하지만, 라우팅, 데이터
        가져오기, 스타일링과 같은 일반적인 기능에 대한 추가적인 솔루션은 포함하지 않습니다.
      </p>
      <p>
        React 생태계에는 이러한 문제들을 해결하기 위한 많은 도구가 있습니다. 저희는 널리 사용되는 몇 가지
        도구를 출발점으로 제시했지만, 본인에게 더 적합한 다른 도구들을 자유롭게 선택해도 좋습니다.
      </p>

      <h4>라우팅</h4>
      <p>
        라우팅은 사용자가 특정 URL에 접속했을 때 어떤 콘텐츠나 페이지를 보여줄지 결정합니다. URL을 앱의
        다양한 부분과 대응하기 위해 라우터를 설정해야 합니다. 또한 중첩 라우터, 경로 매개변수, 쿼리
        매개변수도 처리해야 합니다. 라우터는 코드 내에서 구성하거나, 컴포넌트 폴더 및 파일 구조를 기반으로
        정의할 수 있습니다.
      </p>
      <p>
        라우터는 최신 애플리케이션의 핵심 부분이며, 일반적으로 데이터 가져오기(더 빠른 로딩을 위한 전체
        페이지 데이터 미리 가져오기 포함), (클라이언트 번들 크기 최소화를 위한) 코드 분할, (각 페이지가
        어떻게 생성되는지 결정하는) 페이지 렌더링 방식과 통합됩니다.
      </p>
      <p>다음을 사용하는 것을 제안합니다.</p>
      <ul>
        <li>
          <a href="https://reactrouter.com/start/data/custom" target="_blank" rel="noreferrer">
            React Router
          </a>
        </li>
        <li>
          <a href="https://tanstack.com/router/latest" target="_blank" rel="noreferrer">
            Tanstack Router
          </a>
        </li>
      </ul>

      <h4>데이터 가져오기</h4>
      <p>
        서버나 다른 데이터 소스에서 데이터를 가져오는 것은 대부분의 애플리케이션에서 핵심적인 부분입니다.
        이를 올바르게 수행하려면 로딩 상태, 오류 상태, 가져온 데이터 캐싱을 처리해야 하는데, 이는 복잡할 수
        있습니다.
      </p>
      <p>
        목적에 맞게 제작된 데이터 가져오기 라이브러리는 데이터를 가져오고 캐싱하는 어려운 작업을 대신
        해주므로, 개발자는 앱에 필요한 데이터가 무엇인지, 그리고 어떻게 표시할지에 집중할 수 있습니다. 이러한
        라이브러리는 일반적으로 컴포넌트에서 직접 사용되지만, 더 빠른 미리 가져오기(Pre-Fetching)와 더 나은
        성능을 위해 라우팅 로더에 통합될 수도 있고, 서버 렌더링에서도 사용될 수 있습니다.
      </p>
      <p>
        컴포넌트에서 직접 데이터를 가져오면 네트워크 요청 폭포(Network Request Waterfall) 현상으로 인해
        로딩 시간이 느려질 수 있다는 사실을 알아두세요. 그래서 저희는 라우터 로더나 서버에서 최대한 데이터를
        미리 가져오는 것을 권장합니다! 이렇게 하면 페이지를 표시할 때 페이지의 데이터를 한꺼번에 가져올 수
        있습니다.
      </p>
      <p>대부분의 백엔드나 REST 스타일 API에서 데이터를 가져온다면 다음을 사용할 것을 제안합니다.</p>
      <ul>
        <li>
          <a href="https://tanstack.com/query/latest" target="_blank" rel="noreferrer">
            React Query
          </a>
        </li>
        <li>
          <a href="https://swr.vercel.app/" target="_blank" rel="noreferrer">
            SWR
          </a>
        </li>
        <li>
          <a href="https://redux-toolkit.js.org/rtk-query/overview" target="_blank" rel="noreferrer">
            RTK Query
          </a>
        </li>
      </ul>

      <h4>코드 분할</h4>
      <p>
        코드 분할은 앱을 더 작은 번들로 나누어 필요할 때만 로드할 수 있도록 하는 과정입니다. 앱의 코드
        크기는 새로운 기능과 추가적인 의존성이 생길 때마다 증가합니다. 앱 전체의 코드는 사용되기 전에 모두
        전송되어야 하므로 로딩 속도가 느려질 수 있습니다. 캐싱, 기능/의존성 감소, 일부 코드가 서버에서
        실행되도록 코드를 이동하는 방법이 느린 로딩을 완화하는 데 도움이 될 수 있지만, 과도하게 사용하면
        기능적으로 손해를 볼 수 있는 불완전한 해결책입니다.
      </p>
      <p>
        마찬가지로, 프레임워크를 사용하는 앱이 코드 분할을 처리하도록 의존한다면, 오히려 코드 분할을 전혀
        하지 않았을 때보다 로딩이 느려지는 상황을 겪을 수도 있습니다. 예를 들어, 차트를{' '}
        <a href="https://ko.react.dev/reference/react/lazy" target="_blank" rel="noreferrer">
          지연 로딩
        </a>
        하면 차트를 렌더링하는 데 필요한 코드 전송이 지연되어 차트 코드가 앱의 나머지 부분과 분리됩니다.
        번들링 및 데이터 가져오기와 통합할 때 라우트별로 코드를 나누면, 앱의 초기 로드 시간과 가장 큰 시각적
        콘텐츠가 렌더링 되는 시간(
        <a href="https://web.dev/articles/lcp" target="_blank" rel="noreferrer">
          Largest Contentful Paint
        </a>
        )을 줄일 수 있습니다.
      </p>
      <p>코드 분할 지침은 빌드 도구 문서를 참조하세요.</p>
      <ul>
        <li>
          <a href="https://vite.dev/guide/features.html#build-optimizations" target="_blank" rel="noreferrer">
            Vite 빌드 최적화
          </a>
        </li>
        <li>
          <a href="https://parceljs.org/features/code-splitting/" target="_blank" rel="noreferrer">
            Parcel 코드 분할
          </a>
        </li>
        <li>
          <a href="https://rsbuild.dev/guide/optimization/code-splitting" target="_blank" rel="noreferrer">
            Rsbuild 코드 분할
          </a>
        </li>
      </ul>

      <h4>애플리케이션 성능 향상</h4>
      <p>
        선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하므로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG),
        또는 React 서버 컴포넌트(RSC)와 같은 다른{' '}
        <a href="https://www.patterns.dev/vanilla/rendering-patterns" target="_blank" rel="noreferrer">
          렌더링 패턴
        </a>
        을 직접 구현해야 합니다. 처음에는 이러한 기능이 필요하지 않더라도, 나중에는 SSR, SSG 또는 RSC가
        유리한 라우트가 생길 수 있습니다.
      </p>
      <ul>
        <li>
          <strong>단일 페이지 앱(SPA)</strong>은 단일 HTML 페이지를 로드하고 사용자가 앱과 상호작용을 할 때
          페이지를 동적으로 업데이트합니다. SPA는 시작하기는 더 쉽지만, 초기 로드 시간이 느릴 수 있습니다.
          SPA는 대부분의 빌드 도구에서 기본 아키텍처입니다.
        </li>
        <li>
          <strong>스트리밍 서버 측 렌더링(SSR)</strong>은 서버에서 페이지를 렌더링하고 완전히 렌더링 된
          페이지를 클라이언트로 보냅니다. SSR은 성능을 향상할 수 있지만, 단일 페이지 앱보다 설정하고 유지
          관리하는 것이 더 복잡할 수 있습니다. 스트리밍 기능이 추가되면서 SSR은 설정 및 유지 관리가 매우
          복잡해질 수 있습니다.
        </li>
        <li>
          <strong>정적 사이트 생성(SSG)</strong>은 빌드 시점에 앱에 대한 정적 HTML 파일을 생성합니다. SSG는
          성능을 향상할 수 있지만, 서버 측 렌더링보다 설정하고 유지 관리하는 것이 더 복잡할 수 있습니다.
        </li>
        <li>
          <strong>React 서버 컴포넌트(RSC)</strong>를 사용하면 빌드 타임, 서버 전용, 대화형 컴포넌트를 단일
          React 트리에서 혼합할 수 있습니다. RSC는 성능을 향상할 수 있지만, 현재는 설정하고 유지 관리하는
          데 깊은 전문 지식이 필요합니다.
        </li>
      </ul>
      <p>
        프레임워크로 만들어진 앱이 라우트별로 렌더링 전략을 선택할 수 있도록, 렌더링 전략은 라우터와
        통합되어야 합니다. 이렇게 하면 전체 앱을 다시 작성할 필요 없이 다양한 렌더링 전략을 사용할 수
        있습니다. 예를 들어, 앱의 랜딩 페이지는 정적으로 생성되는 것(SSG)이 유리할 수 있지만, 콘텐츠 피드가
        있는 페이지는 서버 측 렌더링이 가장 잘 작동할 수 있습니다.
      </p>
      <p>
        올바른 라우트에 올바른 렌더링 전략을 사용하면 콘텐츠의 첫 바이트가 로드되는 시간(
        <a href="https://web.dev/articles/ttfb" target="_blank" rel="noreferrer">
          Time to First Byte
        </a>
        ), 첫 번째 콘텐츠가 렌더링 되는 시간(
        <a href="https://web.dev/articles/fcp" target="_blank" rel="noreferrer">
          First Contentful Paint
        </a>
        ), 그리고 앱의 가장 큰 시각적 콘텐츠가 렌더링되는 시간(
        <a href="https://web.dev/articles/lcp" target="_blank" rel="noreferrer">
          Largest Contentful Paint
        </a>
        )을 줄일 수 있습니다.
      </p>

    </DocPage>
  );
}
