export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [<li>Buy Milk</li>, <li>Feed the pets</li>]
    numberArray1.push(6);
    stringArray1.push("string3");
    todoArray.push(<li>Walk the dog</li>);
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);
    return (
        <div id="wd-adding-and-removing-to-from-arrays">
            <h4>Add/remove to /from arrays</h4>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            Todo list:
            <ol>{todoArray}</ol>
            <hr />
        </div>
    )
}