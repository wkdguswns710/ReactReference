export interface NavItem {
  title: string;
  path: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: '시작하기',
    items: [
      { title: '빠른 시작', path: '/learn/quick-start' },
      { title: '튜토리얼: 틱택토', path: '/learn/tutorial-tic-tac-toe' },
      { title: 'React로 생각하기', path: '/learn/thinking-in-react' },
    ],
  },
  {
    title: 'UI 표현하기',
    items: [
      { title: '첫 번째 컴포넌트', path: '/learn/your-first-component' },
      { title: '컴포넌트 import/export', path: '/learn/importing-and-exporting-components' },
      { title: 'JSX로 마크업 작성하기', path: '/learn/writing-markup-with-jsx' },
      { title: 'JSX에서 JavaScript 사용하기', path: '/learn/javascript-in-jsx-with-curly-braces' },
      { title: '컴포넌트에 Props 전달하기', path: '/learn/passing-props-to-a-component' },
      { title: '조건부 렌더링', path: '/learn/conditional-rendering' },
      { title: '리스트 렌더링', path: '/learn/rendering-lists' },
      { title: '컴포넌트 순수성 유지하기', path: '/learn/keeping-components-pure' },
    ],
  },
  {
    title: '상호작용성 추가하기',
    items: [
      { title: '이벤트에 응답하기', path: '/learn/responding-to-events' },
      { title: 'State: 컴포넌트의 메모리', path: '/learn/state-a-components-memory' },
      { title: '렌더링 그리고 커밋', path: '/learn/render-and-commit' },
      { title: 'State를 스냅샷으로', path: '/learn/state-as-a-snapshot' },
      { title: '여러 State 업데이트 큐에 담기', path: '/learn/queueing-a-series-of-state-updates' },
      { title: '객체 State 업데이트하기', path: '/learn/updating-objects-in-state' },
      { title: '배열 State 업데이트하기', path: '/learn/updating-arrays-in-state' },
    ],
  },
  {
    title: 'State 관리하기',
    items: [
      { title: 'State로 입력에 반응하기', path: '/learn/reacting-to-input-with-state' },
      { title: 'State 구조 선택하기', path: '/learn/choosing-the-state-structure' },
      { title: '컴포넌트 간 State 공유하기', path: '/learn/sharing-state-between-components' },
      { title: 'State를 보존하고 초기화하기', path: '/learn/preserving-and-resetting-state' },
      { title: 'State 로직을 Reducer로 추출하기', path: '/learn/extracting-state-logic-into-a-reducer' },
      { title: '컨텍스트로 데이터 깊이 전달하기', path: '/learn/passing-data-deeply-with-context' },
      { title: 'Reducer와 Context로 앱 확장하기', path: '/learn/scaling-up-with-reducer-and-context' },
    ],
  },
  {
    title: '탈출구',
    items: [
      { title: 'Ref로 값 참조하기', path: '/learn/referencing-values-with-refs' },
      { title: 'Ref로 DOM 조작하기', path: '/learn/manipulating-the-dom-with-refs' },
      { title: 'Effect로 동기화하기', path: '/learn/synchronizing-with-effects' },
      { title: 'Effect가 필요하지 않을 수도 있습니다', path: '/learn/you-might-not-need-an-effect' },
      { title: 'Effect의 생명주기', path: '/learn/lifecycle-of-reactive-effects' },
      { title: 'Effect에서 이벤트 분리하기', path: '/learn/separating-events-from-effects' },
      { title: 'Effect 의존성 제거하기', path: '/learn/removing-effect-dependencies' },
      { title: '커스텀 훅으로 로직 재사용하기', path: '/learn/reusing-logic-with-custom-hooks' },
    ],
  },
];

export const headerNavItems = [
  { title: '학습하기', path: '/learn' },
  { title: 'API 레퍼런스', path: '/reference' },
];
