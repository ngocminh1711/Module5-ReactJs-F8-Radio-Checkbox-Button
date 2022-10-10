import './App.css';
import {useState} from "react";


const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]


function App() {
    const [checkedRadio, setCheckedRadio] = useState(1)
    const [checkedBox, setCheckedBox] = useState([])

    const handleSubmit = () => {
     console.log({ids: checkedBox})
    }
    const handleCheck = (id) => {
           setCheckedBox(prev => {
               const isChecked = checkedBox.includes(id)
               if (isChecked){
                  return checkedBox.filter(item => item !== id)
               } else {
                   return [...prev, id]
               }
           }

    )
    }

    return (
        <div className="App">
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checkedRadio === course.id}
                        onChange={()=> handleCheck(course.id) }/>
                    {course.name}
                </div>
            ))
            }
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checkedBox.includes(course.id)}
                        onChange={() =>
                            handleCheck(course.id)
                        }/>
                    {course.name}
                </div>
            ))
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;
