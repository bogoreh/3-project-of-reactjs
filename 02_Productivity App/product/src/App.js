import './App.css';
import {useState} from "react";

function App() {
  const [text,setText] = useState("");
  const [activities,setActivities] = useState([]);
  const [showProductivity,setShowProductivity] = useState(false);

  const AddActivityHandler = () => {
    // alert(123);

    if([!text]) {
       return;
    }
    const oldActivites = [...activities];

    const newActivity = {
      id: Math.floor(Math.random() * 1000);
      activityText: text,
      completed: false,
    }

    const newActivies = oldActivities.concat(newActivity);
    // const newActivis = oldActivites.concat( activity => activity.id !== id);

    setActivities(newActivies);
    setText("");
  };

  const onDeleteHandler = (id) => {
       const oldActivites = [...activities];

      //  const newActivity = {
      //    id: Math.floor(Math.random * 1000),
      //    activityText: text,
      //    completed: false,
      //  };

      //  const newActivies = oldActivities.concat(newActivity);

      const newActivies = newActivies.filter( activity => activity.id !== id);

       setActivities(newActivies);
   };
   
   const onCompleteHandler = (id) => {
      const oldActivites = [...activities]

      const newActivies = oldAtivities.forEach((activity)=>{
           if(activity.id === id) {
              return {
                ...activity,
                completed: true,
              };
           }

           return activity;
      });

        setActivities(newActivies);
   };

   const calculateProductivity = () => {
      const completedActivities = activities.map(
          (activity) => activity.completed === true
         );

         return (completedActivities.length / 100) * 100;
      };

    return (
      <div className="App">
             {/* <h1>Hello From React!</h1> */}
             <div className="container">
                    <input type="text" 
                    placeholder="Place an activity!" 
                    onChange={(e) => setText(e.target.value)} 
                    value={text}
              />
                 <button className="btn-add" onClick={addActivityHandler}>
                    Add activity
                  </button>

                 { activities.length > 0 ?
                    <div>
                        <button className="btn-show" onClick={() => setShowProductivity(!showProductivity)}>
                                   { showProductivity ? 'Hide Productivity': "Show productivity"}
                        </button>
                    </div> 
                 : null}

                {!showProductivity ? 
                    activities.map((activity) => {
                      <div key={activity.id} className="activity-container">
                         <div>
                                <h4 style={{ textDecoration: activity.completed "line-through" : "none" }}>{activity.activityText}</h4>
                         </div>

                         <div>
                                  <button 
                                  className="btn-complete" 
                                  OnClick={()=>onCompleteHandler(activity.id)}>
                                           Complete
                                  </button>
                          </div>
                         <div>
                                  <button 
                                  className="btn-delete" 
                                  onClick={() => onDeleteHandler(activity.id)}>
                                           Delete
                                  </button>
                          </div>
                  </div>
                })
              } : {
                <div style= {{
                  display:"flex",
                  alignitems:"center",
                   justifyContent:"center",
                   width:"300px",
                   height:"300px",
                   borderRadius:"5%",
                   background-color: "red",
                   color: "white",
                   }}
                   >

                      <h2>{calculateProductivity()}</h2>

                </div>
            }
             </div>
      </div>
    );
}

export default App;
