/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Calendar from 'tui-calendar';
import { TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service';
export class NgxTuiCalendarComponent {
    /**
     * @param {?} elm
     * @param {?} defaults
     */
    constructor(elm, defaults) {
        this.elm = elm;
        this.defaults = defaults;
        this.beforeCreateSchedule = new EventEmitter();
        this.beforeDeleteSchedule = new EventEmitter();
        this.afterRenderSchedule = new EventEmitter();
        this.tuiCalendarCreated = new EventEmitter();
        this.dayNameClicked = new EventEmitter();
        this.timeClicked = new EventEmitter();
        this.scheduleClicked = new EventEmitter();
        this.beforeUpdateSchedule = new EventEmitter();
        /** @type {?} */
        const options = {
            defaultView: this.defaultView,
            taskView: this.taskView,
            scheduleView: this.scheduleView,
            template: this.template,
            month: this.month,
            week: this.week
        };
        Object.keys(this.defaults).forEach(optionKey => {
            if (typeof options[optionKey] === 'undefined') {
                options[optionKey] = this.defaults[optionKey];
            }
        });
        Object.keys(options).forEach(optionKey => {
            if (typeof options[optionKey] === 'undefined') {
                delete options[optionKey];
            }
        });
        this.tuiCalendar = new Calendar(this.elm.nativeElement, options);
        this.tuiCalendarCreated.emit({ tuiCalendar: this.tuiCalendar });
        this.tuiCalendar.on('beforeCreateSchedule', (event) => {
            if (event.triggerEventName === 'mouseup') {
                this.timeClicked.emit(/** @type {?} */ (event.start));
            }
        });
        this.tuiCalendar.on('afterRenderSchedule', (event) => {
            this.afterRenderSchedule.emit(event);
        });
        this.tuiCalendar.on('beforeCreateSchedule', (event) => {
            this.beforeCreateSchedule.emit(event);
        });
        this.tuiCalendar.on('beforeDeleteSchedule', (event) => {
            this.beforeDeleteSchedule.emit(event);
        });
        this.tuiCalendar.on('beforeUpdateSchedule', (event) => {
            this.beforeUpdateSchedule.emit(event);
        });
        this.tuiCalendar.on('clickDayname', (event) => {
            this.dayNameClicked.emit(event);
        });
        this.tuiCalendar.on('clickSchedule', (event) => {
            this.scheduleClicked.emit(event);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["schedules"] !== undefined) {
            this.updateSchedules();
        }
    }
    /**
     * @return {?}
     */
    updateSchedules() {
        this.tuiCalendar.clear();
        this.tuiCalendar.createSchedules(this.schedules, true);
        this.tuiCalendar.render();
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setTimeZoneOffset(offset) {
        this.tuiCalendar.setTimeZoneOffset(offset);
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setTimeZoneOffsetCallback(offset) {
        this.tuiCalendar.setTimeZoneOffset(offset);
    }
    /**
     * @param {?} view
     * @return {?}
     */
    changeView(view) {
        this.tuiCalendar.changeView(view);
    }
    /**
     * @return {?}
     */
    clear() {
        this.tuiCalendar.clear();
    }
    /**
     * @param {?} schedules
     * @return {?}
     */
    createSchedules(schedules) {
        this.tuiCalendar.createSchedules(schedules);
    }
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @param {?} silent
     * @return {?}
     */
    deleteSchedule(scheduleId, calendarId, silent) {
        this.tuiCalendar.deleteSchedule(scheduleId, calendarId, silent);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.tuiCalendar.destroy();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.tuiCalendar.getDate();
    }
    /**
     * @return {?}
     */
    getDateRangeEnd() {
        return this.tuiCalendar.getDateRangeEnd();
    }
    /**
     * @return {?}
     */
    getDateRangeStart() {
        return this.tuiCalendar.getDateRangeStart();
    }
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @return {?}
     */
    getElement(scheduleId, calendarId) {
        return this.tuiCalendar.getElement(scheduleId, calendarId);
    }
    /**
     * @return {?}
     */
    getOptions() {
        /** @type {?} */ return (this.tuiCalendar.getOptions());
    }
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @return {?}
     */
    getSchedule(scheduleId, calendarId) {
        return this.tuiCalendar.getSchedule(scheduleId, calendarId);
    }
    /**
     * @return {?}
     */
    getViewName() {
        return this.tuiCalendar.getViewName();
    }
    /**
     * @return {?}
     */
    hideMoreView() {
        this.tuiCalendar.hideMoreView();
    }
    /**
     * @return {?}
     */
    next() {
        this.tuiCalendar.next();
    }
    /**
     * @return {?}
     */
    prev() {
        this.tuiCalendar.prev();
    }
    /**
     * @param {?} schedule
     * @return {?}
     */
    openCreationPopup(schedule) {
        this.tuiCalendar.openCreationPopup(schedule);
    }
    /**
     * @return {?}
     */
    render() {
        this.tuiCalendar.render();
    }
    /**
     * @return {?}
     */
    scrollToNow() {
        this.tuiCalendar.scrollToNow();
    }
    /**
     * @param {?} calendarId
     * @param {?} option
     * @param {?} silent
     * @return {?}
     */
    setCalendarColor(calendarId, option, silent) {
        this.tuiCalendar.setCalendarColor(calendarId, option, silent);
    }
    /**
     * @param {?} calendars
     * @return {?}
     */
    setCalendars(calendars) {
        this.tuiCalendar.setCalendars(calendars);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setDate(date) {
        this.tuiCalendar.setDate(date);
    }
    /**
     * @param {?} options
     * @param {?} silent
     * @return {?}
     */
    setOptions(options, silent) {
        this.tuiCalendar.setOptions(options, silent);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.tuiCalendar.setTheme(theme);
    }
    /**
     * @return {?}
     */
    today() {
        this.tuiCalendar.today();
    }
    /**
     * @param {?} calendarId
     * @param {?} toHide
     * @param {?} render
     * @return {?}
     */
    toggleSchedules(calendarId, toHide, render) {
        this.tuiCalendar.toggleSchedules(calendarId, toHide, render);
    }
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @param {?} scheduleData
     * @param {?} silent
     * @return {?}
     */
    updateSchedule(scheduleId, calendarId, scheduleData, silent) {
        this.tuiCalendar.updateSchedule(scheduleId, calendarId, scheduleData, silent);
    }
}
NgxTuiCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tui-calendar',
                template: ''
            },] },
];
/** @nocollapse */
NgxTuiCalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: TuiCalendarDefaults }
];
NgxTuiCalendarComponent.propDecorators = {
    defaultView: [{ type: Input }],
    taskView: [{ type: Input }],
    scheduleView: [{ type: Input }],
    template: [{ type: Input }],
    month: [{ type: Input }],
    week: [{ type: Input }],
    schedules: [{ type: Input }],
    beforeCreateSchedule: [{ type: Output }],
    beforeDeleteSchedule: [{ type: Output }],
    afterRenderSchedule: [{ type: Output }],
    tuiCalendarCreated: [{ type: Output }],
    dayNameClicked: [{ type: Output }],
    timeClicked: [{ type: Output }],
    scheduleClicked: [{ type: Output }],
    beforeUpdateSchedule: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.defaultView;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.taskView;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.scheduleView;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.template;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.month;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.week;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.schedules;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.beforeCreateSchedule;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.beforeDeleteSchedule;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.afterRenderSchedule;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.tuiCalendarCreated;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.dayNameClicked;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.timeClicked;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.scheduleClicked;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.beforeUpdateSchedule;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.tuiCalendar;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.elm;
    /** @type {?} */
    NgxTuiCalendarComponent.prototype.defaults;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR1aS1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdHVpLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL25neC10dWktY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUTlGLE1BQU07Ozs7O0lBc0JKLFlBQW9CLEdBQWUsRUFBVSxRQUE2QjtRQUF0RCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7b0NBWkEsSUFBSSxZQUFZLEVBQUU7b0NBQ2xCLElBQUksWUFBWSxFQUFFO21DQUNwQixJQUFJLFlBQVksRUFBRTtrQ0FDdkIsSUFBSSxZQUFZLEVBQUU7OEJBQ3pCLElBQUksWUFBWSxFQUFFOzJCQUNsQyxJQUFJLFlBQVksRUFBRTsrQkFDQSxJQUFJLFlBQVksRUFBRTtvQ0FDTixJQUFJLFlBQVksRUFBRTs7UUFPMUYsTUFBTSxPQUFPLEdBQXVCO1lBQ2xDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0MsRUFB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QUFDLENBQUM7Ozs7OztJQUd4QyxRQUFRLENBQUMsS0FBZTtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHNUIsS0FBSztRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7O0lBR3BCLGVBQWUsQ0FBQyxVQUFrQixFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7OztJQUd4RCxjQUFjLENBQUMsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFlBQXNCLEVBQUUsTUFBZTtRQUNuRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztZQS9NakYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFWbUIsVUFBVTtZQUdELG1CQUFtQjs7OzBCQVU3QyxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO21DQUVMLE1BQU07bUNBQ04sTUFBTTtrQ0FDTixNQUFNO2lDQUNOLE1BQU07NkJBQ04sTUFBTTswQkFDTixNQUFNOzhCQUNOLE1BQU07bUNBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgQ2FsZW5kYXIgZnJvbSAndHVpLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgVHVpQ2FsZW5kYXJPcHRpb25zLCBUdWlDYWxlbmRhckRlZmF1bHRzIH0gZnJvbSAnLi9uZ3gtdHVpLWNhbGVuZGFyLWRlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZnRlclJlbmRlclNjaGVkdWxlRXZlbnQsIEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZVVwZGF0ZVNjaGVkdWxlRXZlbnQsIENsaWNrRGF5bmFtZUV2ZW50LCBDbGlja1NjaGVkdWxlRXZlbnQgfSBmcm9tICcuL01vZGVscy9FdmVudHMnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4vTW9kZWxzL1NjaGVkdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXR1aS1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUdWlDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgQElucHV0KCkgZGVmYXVsdFZpZXc6IHN0cmluZztcclxuICBASW5wdXQoKSB0YXNrVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzY2hlZHVsZVZpZXc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBtb250aDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIHdlZWs6IG9iamVjdDtcclxuICBASW5wdXQoKSBzY2hlZHVsZXM6IFNjaGVkdWxlW107XHJcblxyXG4gIEBPdXRwdXQoKSBiZWZvcmVDcmVhdGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiZWZvcmVEZWxldGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlclJlbmRlclNjaGVkdWxlOiBFdmVudEVtaXR0ZXI8QWZ0ZXJSZW5kZXJTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdHVpQ2FsZW5kYXJDcmVhdGVkOiBFdmVudEVtaXR0ZXI8eyB0dWlDYWxlbmRhcjogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXlOYW1lQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENsaWNrRGF5bmFtZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdGltZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2NoZWR1bGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8Q2xpY2tTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlVXBkYXRlU2NoZWR1bGU6IEV2ZW50RW1pdHRlcjxCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIHByaXZhdGUgdHVpQ2FsZW5kYXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsIHByaXZhdGUgZGVmYXVsdHM6IFR1aUNhbGVuZGFyRGVmYXVsdHMpIHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBUdWlDYWxlbmRhck9wdGlvbnMgPSB7XHJcbiAgICAgIGRlZmF1bHRWaWV3OiB0aGlzLmRlZmF1bHRWaWV3LFxyXG4gICAgICB0YXNrVmlldzogdGhpcy50YXNrVmlldyxcclxuICAgICAgc2NoZWR1bGVWaWV3OiB0aGlzLnNjaGVkdWxlVmlldyxcclxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXHJcbiAgICAgIG1vbnRoOiB0aGlzLm1vbnRoLFxyXG4gICAgICB3ZWVrOiB0aGlzLndlZWtcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0cykuZm9yRWFjaChvcHRpb25LZXkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb3B0aW9uS2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBvcHRpb25zW29wdGlvbktleV0gPSB0aGlzLmRlZmF1bHRzW29wdGlvbktleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uS2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29wdGlvbktleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyQ3JlYXRlZC5lbWl0KHsgdHVpQ2FsZW5kYXI6IHRoaXMudHVpQ2FsZW5kYXIgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlQ3JlYXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRyaWdnZXJFdmVudE5hbWUgPT09ICdtb3VzZXVwJykge1xyXG4gICAgICAgIHRoaXMudGltZUNsaWNrZWQuZW1pdCg8RGF0ZT5ldmVudC5zdGFydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2FmdGVyUmVuZGVyU2NoZWR1bGUnLCAoZXZlbnQ6IEFmdGVyUmVuZGVyU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdiZWZvcmVDcmVhdGVTY2hlZHVsZScsIChldmVudDogQmVmb3JlQ3JlYXRlU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmJlZm9yZUNyZWF0ZVNjaGVkdWxlLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlRGVsZXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVEZWxldGVTY2hlZHVsZS5lbWl0KGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2JlZm9yZVVwZGF0ZVNjaGVkdWxlJywgKGV2ZW50OiBCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuYmVmb3JlVXBkYXRlU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja0RheW5hbWUnLCAoZXZlbnQ6IENsaWNrRGF5bmFtZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF5TmFtZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja1NjaGVkdWxlJywgKGV2ZW50OiBDbGlja1NjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJzY2hlZHVsZXNcIl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTY2hlZHVsZXMoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNsZWFyKCk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyh0aGlzLnNjaGVkdWxlcywgdHJ1ZSk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRpbWVab25lT2Zmc2V0KG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldFRpbWVab25lT2Zmc2V0KG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VGltZVpvbmVPZmZzZXRDYWxsYmFjayhvZmZzZXQ6IHZvaWQpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0VGltZVpvbmVPZmZzZXQob2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VWaWV3KHZpZXc6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jaGFuZ2VWaWV3KHZpZXcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZGVsZXRlU2NoZWR1bGUoc2NoZWR1bGVJZCwgY2FsZW5kYXJJZCwgc2lsZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZSgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGVSYW5nZUVuZCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZVJhbmdlRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZVJhbmdlU3RhcnQoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldERhdGVSYW5nZVN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RWxlbWVudChzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRFbGVtZW50KHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9wdGlvbnMoKSB7XHJcbiAgICA8VHVpQ2FsZW5kYXJPcHRpb25zPnRoaXMudHVpQ2FsZW5kYXIuZ2V0T3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldFNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZpZXdOYW1lKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRWaWV3TmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVNb3JlVmlldygpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuaGlkZU1vcmVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXYoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnByZXYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ3JlYXRpb25Qb3B1cChzY2hlZHVsZTogYW55KSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9wZW5DcmVhdGlvblBvcHVwKHNjaGVkdWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFRvTm93KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zY3JvbGxUb05vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZDogc3RyaW5nLCBvcHRpb246IGFueSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZCwgb3B0aW9uLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFycyhjYWxlbmRhcnM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFycyhjYWxlbmRhcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhdGUoZGF0ZTogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXREYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogVHVpQ2FsZW5kYXJPcHRpb25zLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0T3B0aW9ucyhvcHRpb25zLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRoZW1lKHRoZW1lOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9kYXkoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQ6IHN0cmluZywgdG9IaWRlOiBib29sZWFuLCByZW5kZXI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIudG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQsIHRvSGlkZSwgcmVuZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTY2hlZHVsZShzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZywgc2NoZWR1bGVEYXRhOiBTY2hlZHVsZSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnVwZGF0ZVNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQsIHNjaGVkdWxlRGF0YSwgc2lsZW50KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==