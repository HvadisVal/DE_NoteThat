import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from '@hello-pangea/dnd';

const initialTasks = {
  todo: [
    { id: '1', text: 'Buy groceries' },
    { id: '2', text: 'Write report' },
  ],
  inProgress: [
    { id: '3', text: 'Work on React project' },
  ],
  done: [
    { id: '4', text: 'Read a book' },
  ]
};

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId as keyof typeof tasks;
    const destCol = destination.droppableId as keyof typeof tasks;

    const sourceItems = Array.from(tasks[sourceCol]);
    const [movedItem] = sourceItems.splice(source.index, 1);
    const destItems = Array.from(tasks[destCol]);
    destItems.splice(destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [sourceCol]: sourceItems,
      [destCol]: destItems,
    });
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">📝 Tasks</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(tasks).map(([columnId, columnTasks]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided: DroppableProvided) => (
                <div
                  className="bg-gray-800 p-4 rounded-lg"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3 className="text-lg font-semibold mb-3 capitalize text-blue-300">{columnId.replace(/([A-Z])/g, ' $1')}</h3>
                  {columnTasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided: DraggableProvided) => (
                        <div
                          className="bg-gray-700 p-2 rounded mb-2 text-white"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;
