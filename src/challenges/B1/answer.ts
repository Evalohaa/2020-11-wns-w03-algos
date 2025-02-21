/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    return events.sort((event1, event2) => {
        if (event1.startDatetime === event2.startDatetime) {
            return event1.endDatetime < event2.endDatetime ? -1 : 0;
        }
        return event1.startDatetime < event2.startDatetime ? -1 : 0;
    })
}
    // const sortedByDay = events.sort((a: EventDatetime, b: EventDatetime): number => {
        
    //     const startTimeB = new Date(b.startDatetime).getTime()
    //     const startTimeA = new Date(a.startDatetime).getTime()
        
    //     if( startTimeB === startTimeA ) {
    //         const endTimeB = new Date(b.endDatetime).getTime()
    //         const endTimeA = new Date(a.endDatetime).getTime()

    //         return (endTimeA - startTimeA) - (endTimeB - startTimeB) 
    //     } else {
    //         return startTimeA - startTimeB
    //     }
    // })
    // return sortedByDay;

// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}