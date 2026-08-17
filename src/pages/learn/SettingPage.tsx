import { Link } from 'react-router-dom';
import DocPage from '@/components/DocPage/DocPage';
import CodeBlock from '@/components/DocPage/CodeBlock';
import Callout from '@/components/DocPage/Callout';

const eslintConfigCode = `{
  "extends": ["react-app", "react-app/jest"]
}`;

const prettierConfigCode = `{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all"
}`;

export default function SettingPage() {
  return (
    <DocPage
      title="설정하기"
      description="에디터를 올바르게 구성하면 코드를 더 읽기 쉽고 빠르게 작성할 수 있으며, 코드를 작성하는 순간 버그를 잡아낼 수도 있습니다."
      badge="설정하기"
    >
      <h2>에디터 설정하기</h2>
      <p>
        에디터를 올바르게 구성하면 코드를 더 읽기 쉽고 빠르게 작성할 수 있습니다. 심지어 코드를 작성하는
        순간 버그를 잡아낼 수도 있습니다! 처음 에디터를 설정하는 것이라면, 좋은 에디터를 선택하는 것만으로도
        생산성에 큰 도움이 됩니다.
      </p>

      <h3>에디터 선택하기</h3>
      <p>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
          VS Code
        </a>
        는 오늘날 가장 널리 사용되는 에디터 중 하나입니다. VS Code는 방대한 확장 마켓플레이스를 보유하고
        있으며, GitHub와 같은 인기 있는 서비스와도 잘 통합됩니다. 아래에 나열된 대부분의 기능은 확장
        프로그램으로 VS Code에 추가할 수 있어, 매우 구성 가능합니다!
      </p>
      <p>React 커뮤니티에서 사용하는 다른 인기 있는 텍스트 에디터는 다음과 같습니다.</p>
      <ul>
        <li>
          <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noreferrer">
            WebStorm
          </a>
          은 자바스크립트를 위해 특별히 설계된 통합 개발 환경입니다.
        </li>
        <li>
          <a href="https://www.sublimetext.com/" target="_blank" rel="noreferrer">
            Sublime Text
          </a>
          는 JSX와 TypeScript를 지원하며, 문법 강조와 자동 완성 기능이 내장되어 있습니다.
        </li>
        <li>
          <a href="https://www.vim.org/" target="_blank" rel="noreferrer">
            Vim
          </a>
          은 모든 종류의 텍스트를 매우 효율적으로 생성하고 변경할 수 있도록 구성 가능한 텍스트 에디터입니다.
        </li>
      </ul>

      <h3>추천 텍스트 에디터 기능</h3>
      <p>
        일부 에디터에는 이러한 기능이 기본으로 포함되어 있지만, 다른 에디터는 확장 프로그램을 추가해야 할 수
        있습니다. 사용 중인 에디터가 어떤 기능을 지원하는지 확인해보세요!
      </p>

      <h4>린팅(Linting)</h4>
      <p>
        코드 린터는 코드를 작성하는 동안 실시간으로 문제를 찾아내어 문제를 더 빠르게 해결할 수 있도록
        도와줍니다.{' '}
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          ESLint
        </a>
        는 React를 위한 인기 있는 오픈소스 린터입니다.
      </p>
      <ul>
        <li>Hook 규칙을 강제하는 <code>eslint-plugin-react-hooks</code>를 함께 사용하는 것이 좋습니다.</li>
        <li>
          <code>Create React App</code>은 몇 가지 규칙과 함께 ESLint를 사전에 구성한{' '}
          <code>eslint-config-react-app</code>을 포함합니다.
        </li>
      </ul>
      <CodeBlock code={eslintConfigCode} language="json" filename=".eslintrc.json" />
      <Callout type="warning">
        <p>
          <strong>구성을 저장하지 않고 규칙을 사용할 경우</strong> 필요한 플러그인이 모두 설치되어 있는지
          확인하세요. 예를 들어 Hook 관련 규칙을 사용하려면 <code>eslint-plugin-react-hooks</code> 패키지를
          설치해야 합니다.
        </p>
      </Callout>

      <h4>포맷팅(Formatting)</h4>
      <p>
        새로운 협업자와 함께 작업할 때 가장 하고 싶지 않은 일은 코드 스타일(탭 2칸 vs 4칸!)에 대해
        논쟁하는 것입니다.{' '}
        <a href="https://prettier.io/" target="_blank" rel="noreferrer">
          Prettier
        </a>
        는 미리 정의된 조정 가능한 규칙 집합에 따라 코드를 다시 포맷팅하여 코드를 일관되게 유지하는 데
        가장 많이 사용되는 코드 포맷터입니다. 저장할 때 Prettier를 실행하도록 설정하면 빠르고 쉽게 적용할 수
        있습니다.
      </p>
      <CodeBlock code={prettierConfigCode} language="json" filename=".prettierrc" />

      <Callout type="tip">
        <p>
          <strong>VS Code를 사용하고 있다면?</strong> "Editor &gt; Format On Save"를 확인하고,{' '}
          <code>.vscode/settings.json</code>에{' '}
          <code>{'"editor.defaultFormatter": "esbenp.prettier-vscode"'}</code>를 추가하면 파일을 저장할
          때마다 자동으로 포맷팅됩니다.
        </p>
      </Callout>

      <h2>다음 단계</h2>
      <p>
        에디터 설정을 마쳤다면, 다음으로 React 앱을 더 빠르게 만들어주는{' '}
        <Link to="/learn/compiler">React 컴파일러</Link>에 대해 알아보세요.
      </p>
    </DocPage>
  );
}
