export const reorder = (list, startIndex, endIndex) => {
    // console.log('reorder', list);
    // console.log('startIndex', startIndex);
    // console.log('endIndex', endIndex);
    const result = Array.from(list);
    // const result = list.map(item => item.columnName);
 
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const reorderedTasksMap = ({ tasksMap, source, destination }) => {

    const current = [...tasksMap[source.droppableId]];
    const next = [...tasksMap[destination.droppableId]];
    const target = current[source.index];
    // console.log('tasksMap', tasksMap);
    // moving to same list
    if (source.droppableId === destination.droppableId) {

        const reordered = reorder(current, source.index, destination.index);
        const result = {
            ...tasksMap,
            [source.droppableId]: reordered,
        };
        return {
            tasksMap: result,
        };
    }

    // moving to different list
    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, target);
            // console.log('current', current);
            // console.log('target', target);
            // console.log('next', next);
    const result = {
        ...tasksMap,
        [source.droppableId]: current,
        [destination.droppableId]: next,
    };

    return {
        tasksMap: result,
        options:{current,target,next}
    };
};

export function moveBetween({ list1, list2, source, destination }) {
    const newFirst = Array.from(list1.values);
    const newSecond = Array.from(list2.values);

    const moveFrom = source.droppableId === list1.id ? newFirst : newSecond;
    const moveTo = moveFrom === newFirst ? newSecond : newFirst;

    const [moved] = moveFrom.splice(source.index, 1);
    moveTo.splice(destination.index, 0, moved);

    return {
        list1: {
            ...list1,
            values: newFirst,
        },
        list2: {
            ...list2,
            values: newSecond,
        },
    };
}
