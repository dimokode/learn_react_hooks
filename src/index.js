import { createRoot } from 'react-dom/client'
import ChartComponent from './ChartComponent';
import ContainerComponent from './ContainerComponent';
import ContextComponent from './ContextComponent';
import Counter from './Counter';
import ListComponent from './ListComponent';
import { MyComponent } from './myComponent';
import ParentComponent from './ParentComponent';
//import { HelloWorld } from './HelloWorld';
//import { InputField } from './InputField';
//import { YearsCounter} from './counters'
//import { HeavyComponent } from './heavyComponent';
//import { Calculator } from './calculator';
//import { UseEffectComponent } from './useEffectComponent';
import { GameComponent } from './game';
//import { UseRefComponent } from './useRef';
//import { PincodeComponent } from './pincodeComponent';
//import { FancyButtonComponent } from './fancyButton';
import App from './counterApp/app';
import InputComponent from './InputComponent';
import ToggleComponent from './ToggleComponent';
//import PointsComponent from './useEventListener';
const container = document.getElementById("root");
const root = createRoot(container)




const RootElement = () => {

  const propsFirstname = {
    label : 'First Name',
    id: 'firstName',
    initialValue: 'Vlad'
  }
  const propsLastname = {
    label : 'Last Name',
    id: 'lastName',
    initialValue: 'Ivanov'
  }

  return (
    <>

      
      <GameComponent />
      <ToggleComponent />

      <InputComponent />

      <ContextComponent />

      <ContainerComponent title="My Components" contentVisible={false}>
        <MyComponent initialText="assadas" />
        <MyComponent initialText="1234124" />
      </ContainerComponent>

      <ContainerComponent title="Something Else" contentVisible={false}>
        <MyComponent initialText="assadas" />
        <MyComponent initialText="1234124" />
      </ContainerComponent>
      
    </>
  )
}

//root.render(<HelloWorld color="red" />);

/**
 *       <ChartComponent />
 *       <App />
      <hr/>
      <Counter />
      <ListComponent />
      <PincodeComponent />
      <GameComponent />
      <UseRefComponent />
      <Calculator />
      <HeavyComponent maxCount={10} maxPow={10}/>
      <InputField props={propsFirstname} />
      <InputField props={propsLastname} />
      <YearsCounter initialValue={1970} />
      <YearsCounter initialValue={1970} delta={10} />
      <PointsComponent />
 */
root.render(<RootElement />);