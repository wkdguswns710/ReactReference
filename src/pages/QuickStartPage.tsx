import DocPage from '../components/DocPage/DocPage';
import CodeBlock from '../components/DocPage/CodeBlock';
import Callout from '../components/DocPage/Callout';

const helloWorldCode = `function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`;

const stateCode = `import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}`;

const propsCode = `function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}`;

export default function QuickStartPage() {
  return (
    <DocPage
      title="빠른 시작"
      description="React 공식 문서의 빠른 시작 내용을 정리한 페이지입니다. 이 페이지를 수정하여 학습한 내용을 채워보세요."
      badge="학습하기"
    >
      <h2>컴포넌트 생성 및 중첩하기</h2>
      <p>
        React 앱은 <strong>컴포넌트</strong>로 구성됩니다. 컴포넌트는 고유한 로직과 모양을 가진 UI의 일부입니다.
        컴포넌트는 버튼만큼 작을 수도 있고 전체 페이지만큼 클 수도 있습니다.
      </p>
      <p>
        React 컴포넌트는 마크업을 반환하는 JavaScript 함수입니다.
      </p>

      <CodeBlock code={helloWorldCode} filename="App.jsx" />

      <Callout type="note">
        <p>React 컴포넌트 이름은 항상 대문자로 시작해야 하며, HTML 태그는 소문자여야 합니다.</p>
      </Callout>

      <h2>State 추가하기</h2>
      <p>
        컴포넌트는 종종 상호작용의 결과로 화면에 표시되는 내용을 변경해야 합니다.
        예를 들어 버튼을 클릭하면 카운터가 증가하도록 할 수 있습니다.
        이를 위해 컴포넌트에 <strong>state</strong>를 추가해야 합니다.
      </p>

      <CodeBlock code={stateCode} filename="App.jsx" />

      <Callout type="tip">
        <p>
          <code>useState</code>는 두 가지를 제공합니다: 현재 state (<code>count</code>)와
          이를 업데이트하는 함수 (<code>setCount</code>). 관례상 <code>[something, setSomething]</code>으로 명명합니다.
        </p>
      </Callout>

      <h2>State 공유하기</h2>
      <p>
        각 컴포넌트는 독립적인 state를 가집니다. 여러 컴포넌트가 같은 state를 공유하려면
        해당 state를 <strong>부모 컴포넌트로 끌어올려야</strong> 합니다.
      </p>

      <CodeBlock code={propsCode} filename="App.jsx" />

      <Callout type="warning">
        <p>
          이 페이지는 샘플 콘텐츠입니다. <code>src/pages/QuickStartPage.tsx</code> 파일을 수정하여
          실제 학습 내용을 채워보세요.
        </p>
      </Callout>

      <h2>다음 단계</h2>
      <p>
        이제 React 코드를 작성하는 방법에 대한 기본적인 내용을 살펴봤습니다.
        다음 페이지로 넘어가서 더 자세히 살펴보세요.
      </p>
    </DocPage>
  );
}
