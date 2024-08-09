$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'bookButton'
        },
        editable: false, // The events won't be editable directly in the calendar
        customButtons: {
            bookButton: {
                text: 'Book',
                click: function() {
                    window.open('https://calendly.com/scorchedprovo', '_blank');
                }
            }
        },
        events: [
            {
                title: 'Wood Burning',
                start: '2024-07-13T19:00:00',
                end: '2024-07-13T22:00:00',
                allDay: false
            },
            {
                title: 'Wood Burning',
                start: '2024-07-18T19:00:00',
                end: '2024-07-18T22:00:00',
                allDay: false
            }
            // ,
            // {
            //     title: 'Wood Burning',
            //     start: '2024-07-26T19:00:00',
            //     end: '2024-07-26T22:00:00',
            //     allDay: false
            // }
            // You can add more events here
        ],
        eventRender: function(event, element) {
            var timeText = element.find('.fc-time').text().slice(0, -1);
            var endTime = event.end ? event.end.format('h:mm A') : '';
            var titleText = element.find('.fc-title').text(); 


            if (endTime.length == 8) {
                endTime = endTime.slice(0, 2);
            } else if (endTime.length == 7) {
                endTime = endTime.slice(0, 1);
            }

            element.find('.fc-title').html(titleText + '<br>' + timeText + "-" + endTime + "pm");
            element.find('.fc-time').remove();
        },
        eventClick: function(event) {
            window.open('https://calendly.com/scorchedprovo', '_blank');
        }   
    });
});
