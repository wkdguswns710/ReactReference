import { Link } from 'react-router-dom';
import DocPage from '@/components/DocPage/DocPage';
import CodeBlock from '@/components/DocPage/CodeBlock';
import Callout from '@/components/DocPage/Callout';

const beforeCode = `function MyApp({ items }) {
  // Compiler가 없다면, 매 렌더링마다
  // items가 바뀌지 않아도 새로운 배열이 생성됩니다.
  const visibleItems = items.filter((item) => !item.hidden);

  return <ItemList items={visibleItems} />;
}`;

const manualMemoCode = `function MyApp({ items }) {
  // 수동으로 useMemo를 사용해 재계산을 피해야 했습니다.
  const visibleItems = useMemo(
    () => items.filter((item) => !item.hidden),
    [items]
  );

  return <ItemList items={visibleItems} />;
}`;

const compilerConfigCode = `// babel.config.js
module.exports = {
  plugins: [
    'babel-plugin-react-compiler',
  ],
};`;

const eslintCompilerCode = `{
  "plugins": ["react-compiler"],
  "rules": {
    "react-compiler/react-compiler": "error"
  }
}`;

export default function CompilerPage() {
  return (
    <DocPage
      title="컴파일러"
      description="React Compiler는 React 앱을 자동으로 최적화하는 새로운 컴파일러입니다. 컴포넌트와 Hook 내부에 자동으로 메모이제이션을 추가해 불필요한 재계산과 재렌더링을 줄여줍니다."
      badge="컴파일러"
    >
      <h2>React 컴파일러란?</h2>
      <p>
        React 컴파일러는 <strong>React 규칙(Rules of React)</strong>을 이해하고, 그 규칙에 맞춰 작성된 일반
        자바스크립트 코드를 자동으로 최적화하는 빌드 타임 도구입니다. 컴파일러는 컴포넌트와 Hook 내부에
        메모이제이션을 자동으로 추가해서, 상태가 변경될 때 애플리케이션이 불필요한 부분을 다시 계산하거나
        다시 렌더링하지 않도록 만들어 줍니다.
      </p>
      <Callout type="note">
        <p>
          React 컴파일러는 새로운 컴파일러이며, 아직 실험적인 단계를 벗어나고 있는 도구입니다. 프로덕션에
          도입하기 전에는 반드시 공식 문서에서 최신 지원 상태를 확인하세요.
        </p>
      </Callout>

      <h2>왜 필요할까요?</h2>
      <p>
        지금까지 재렌더링 시 불필요한 재계산을 피하려면 <code>useMemo</code>, <code>useCallback</code>,{' '}
        <code>memo</code>와 같은 API를 이용해 수동으로 메모이제이션해야 했습니다.
      </p>
      <CodeBlock code={manualMemoCode} filename="App.jsx" />
      <p>
        이런 수동 메모이제이션은 코드를 장황하게 만들고, 의존성 배열을 빠뜨리는 등 실수하기도 쉽습니다.
        React 컴파일러는 이 작업을 자동으로 대신 처리해 줍니다.
      </p>
      <CodeBlock code={beforeCode} filename="App.jsx" />
      <Callout type="tip">
        <p>
          컴파일러가 적용된 코드에서는 <code>useMemo</code> 호출이 없어도, 컴파일러가 빌드 시점에 필요한
          메모이제이션 코드를 자동으로 삽입해 줍니다. 소스 코드는 그대로 깔끔하게 유지됩니다.
        </p>
      </Callout>

      <h2>동작 방식</h2>
      <p>
        React 컴파일러는 컴포넌트와 Hook이{' '}
        <a
          href="https://ko.react.dev/reference/rules"
          target="_blank"
          rel="noreferrer"
        >
          React 규칙
        </a>
        을 따른다고 가정하고 동작합니다. 대표적으로 다음과 같은 규칙입니다.
      </p>
      <ul>
        <li>컴포넌트와 Hook은 순수해야 합니다 (같은 입력에 대해 항상 같은 결과를 반환).</li>
        <li>렌더링 중에는 지역 변경만 허용됩니다 (props나 state를 직접 변경하지 않음).</li>
        <li>Hook은 항상 같은 순서로, 최상위 레벨에서만 호출되어야 합니다.</li>
      </ul>
      <p>
        코드가 이 규칙을 위반하면, 컴파일러는 안전하게 해당 컴포넌트나 Hook의 최적화만 건너뛰고 나머지
        코드는 그대로 컴파일합니다. 즉, 컴파일러를 도입해도 앱이 깨지지 않습니다 — 다만 일부 코드는
        최적화되지 않을 뿐입니다.
      </p>

      <h2>설치하기</h2>
      <p>
        먼저 규칙 위반 여부를 확인할 수 있도록 ESLint 플러그인을 설치하는 것이 좋습니다.
      </p>
      <CodeBlock code="npm install eslint-plugin-react-compiler" language="bash" />
      <CodeBlock code={eslintCompilerCode} language="json" filename=".eslintrc.json" />
      <p>
        확인이 끝났다면 빌드 파이프라인에 컴파일러를 추가합니다. Babel을 사용한다면 다음과 같이 플러그인을
        추가할 수 있습니다.
      </p>
      <CodeBlock code="npm install babel-plugin-react-compiler" language="bash" />
      <CodeBlock code={compilerConfigCode} filename="babel.config.js" />
      <Callout type="warning">
        <p>
          React 컴파일러는 프로젝트 전체가 아니라 <strong>디렉토리 단위로 점진적으로 도입</strong>할 수
          있습니다. 처음에는 일부 디렉토리에만 적용해서 문제가 없는지 확인한 뒤, 점차 범위를 넓혀가는 방식을
          권장합니다.
        </p>
      </Callout>

      <h2>다음 단계</h2>
      <p>
        컴파일러를 설정했다면, <Link to="/learn/setting">에디터 설정</Link> 페이지에서 함께 사용하면 좋은
        린팅·포맷팅 도구도 확인해보세요.
      </p>
    </DocPage>
  );
}
