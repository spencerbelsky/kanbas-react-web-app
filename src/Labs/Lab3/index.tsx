import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes/Classes";
import Styles from "./Classes/Styles";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperatior from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import Spreading from "./todo/Spreading";
import TodoList from "./todo/TodoList";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";


export default function Lab3() {
    const { todos } = useSelector((state: any) => state.todosReducer);

    console.log('Hello World!');

    return (
        <div id="wd-lab3" className="container-fluid">
            <h3>Lab 3</h3>
            <ul className="list-group">
                {todos.map((todo: any) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <hr />
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperatior />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoList />
            <Spreading />
            <Destructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} />
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr />
            <h4>Highlight</h4>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <hr />
            <PathParameters />

        </div>
    );
}

export { };
