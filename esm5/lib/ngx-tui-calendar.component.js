/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Calendar from 'tui-calendar';
import { TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service';
var NgxTuiCalendarComponent = /** @class */ (function () {
    function NgxTuiCalendarComponent(elm, defaults) {
        var _this = this;
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
        var options = {
            defaultView: this.defaultView,
            taskView: this.taskView,
            scheduleView: this.scheduleView,
            template: this.template,
            month: this.month,
            week: this.week
        };
        Object.keys(this.defaults).forEach(function (optionKey) {
            if (typeof options[optionKey] === 'undefined') {
                options[optionKey] = _this.defaults[optionKey];
            }
        });
        Object.keys(options).forEach(function (optionKey) {
            if (typeof options[optionKey] === 'undefined') {
                delete options[optionKey];
            }
        });
        this.tuiCalendar = new Calendar(this.elm.nativeElement, options);
        this.tuiCalendarCreated.emit({ tuiCalendar: this.tuiCalendar });
        this.tuiCalendar.on('beforeCreateSchedule', function (event) {
            if (event.triggerEventName === 'mouseup') {
                _this.timeClicked.emit(/** @type {?} */ (event.start));
            }
        });
        this.tuiCalendar.on('afterRenderSchedule', function (event) {
            _this.afterRenderSchedule.emit(event);
        });
        this.tuiCalendar.on('beforeCreateSchedule', function (event) {
            _this.beforeCreateSchedule.emit(event);
        });
        this.tuiCalendar.on('beforeDeleteSchedule', function (event) {
            _this.beforeDeleteSchedule.emit(event);
        });
        this.tuiCalendar.on('beforeUpdateSchedule', function (event) {
            _this.beforeUpdateSchedule.emit(event);
        });
        this.tuiCalendar.on('clickDayname', function (event) {
            _this.dayNameClicked.emit(event);
        });
        this.tuiCalendar.on('clickSchedule', function (event) {
            _this.scheduleClicked.emit(event);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["schedules"] !== undefined) {
            this.updateSchedules();
        }
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.updateSchedules = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.clear();
        this.tuiCalendar.createSchedules(this.schedules, true);
        this.tuiCalendar.render();
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setTimeZoneOffset = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this.tuiCalendar.setTimeZoneOffset(offset);
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setTimeZoneOffsetCallback = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this.tuiCalendar.setTimeZoneOffset(offset);
    };
    /**
     * @param {?} view
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.changeView = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        this.tuiCalendar.changeView(view);
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.clear();
    };
    /**
     * @param {?} schedules
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.createSchedules = /**
     * @param {?} schedules
     * @return {?}
     */
    function (schedules) {
        this.tuiCalendar.createSchedules(schedules);
    };
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @param {?} silent
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.deleteSchedule = /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @param {?} silent
     * @return {?}
     */
    function (scheduleId, calendarId, silent) {
        this.tuiCalendar.deleteSchedule(scheduleId, calendarId, silent);
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.destroy();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.tuiCalendar.getDate();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getDateRangeEnd = /**
     * @return {?}
     */
    function () {
        return this.tuiCalendar.getDateRangeEnd();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getDateRangeStart = /**
     * @return {?}
     */
    function () {
        return this.tuiCalendar.getDateRangeStart();
    };
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getElement = /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @return {?}
     */
    function (scheduleId, calendarId) {
        return this.tuiCalendar.getElement(scheduleId, calendarId);
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */ return (this.tuiCalendar.getOptions());
    };
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getSchedule = /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @return {?}
     */
    function (scheduleId, calendarId) {
        return this.tuiCalendar.getSchedule(scheduleId, calendarId);
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.getViewName = /**
     * @return {?}
     */
    function () {
        return this.tuiCalendar.getViewName();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.hideMoreView = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.hideMoreView();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.next();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.prev();
    };
    /**
     * @param {?} schedule
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.openCreationPopup = /**
     * @param {?} schedule
     * @return {?}
     */
    function (schedule) {
        this.tuiCalendar.openCreationPopup(schedule);
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.render();
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.scrollToNow = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.scrollToNow();
    };
    /**
     * @param {?} calendarId
     * @param {?} option
     * @param {?} silent
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setCalendarColor = /**
     * @param {?} calendarId
     * @param {?} option
     * @param {?} silent
     * @return {?}
     */
    function (calendarId, option, silent) {
        this.tuiCalendar.setCalendarColor(calendarId, option, silent);
    };
    /**
     * @param {?} calendars
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setCalendars = /**
     * @param {?} calendars
     * @return {?}
     */
    function (calendars) {
        this.tuiCalendar.setCalendars(calendars);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.tuiCalendar.setDate(date);
    };
    /**
     * @param {?} options
     * @param {?} silent
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setOptions = /**
     * @param {?} options
     * @param {?} silent
     * @return {?}
     */
    function (options, silent) {
        this.tuiCalendar.setOptions(options, silent);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.tuiCalendar.setTheme(theme);
    };
    /**
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.today = /**
     * @return {?}
     */
    function () {
        this.tuiCalendar.today();
    };
    /**
     * @param {?} calendarId
     * @param {?} toHide
     * @param {?} render
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.toggleSchedules = /**
     * @param {?} calendarId
     * @param {?} toHide
     * @param {?} render
     * @return {?}
     */
    function (calendarId, toHide, render) {
        this.tuiCalendar.toggleSchedules(calendarId, toHide, render);
    };
    /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @param {?} scheduleData
     * @param {?} silent
     * @return {?}
     */
    NgxTuiCalendarComponent.prototype.updateSchedule = /**
     * @param {?} scheduleId
     * @param {?} calendarId
     * @param {?} scheduleData
     * @param {?} silent
     * @return {?}
     */
    function (scheduleId, calendarId, scheduleData, silent) {
        this.tuiCalendar.updateSchedule(scheduleId, calendarId, scheduleData, silent);
    };
    NgxTuiCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-tui-calendar',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NgxTuiCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TuiCalendarDefaults }
    ]; };
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
    return NgxTuiCalendarComponent;
}());
export { NgxTuiCalendarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR1aS1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdHVpLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL25neC10dWktY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQThCNUYsaUNBQW9CLEdBQWUsRUFBVSxRQUE2QjtRQUExRSxpQkF5REM7UUF6RG1CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFxQjtvQ0FaQSxJQUFJLFlBQVksRUFBRTtvQ0FDbEIsSUFBSSxZQUFZLEVBQUU7bUNBQ3BCLElBQUksWUFBWSxFQUFFO2tDQUN2QixJQUFJLFlBQVksRUFBRTs4QkFDekIsSUFBSSxZQUFZLEVBQUU7MkJBQ2xDLElBQUksWUFBWSxFQUFFOytCQUNBLElBQUksWUFBWSxFQUFFO29DQUNOLElBQUksWUFBWSxFQUFFOztRQU8xRixJQUFNLE9BQU8sR0FBdUI7WUFDbEMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7WUFDMUMsRUFBRSxD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VyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7OztJQUd4QywwQ0FBUTs7OztjQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzVCLHVDQUFLOzs7O1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7SUFHcEIsaURBQWU7Ozs7OztjQUFDLFVBQWtCLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBR3hELGdEQUFjOzs7Ozs7O2NBQUMsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFlBQXNCLEVBQUUsTUFBZTtRQUNuRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQzs7O2dCQS9NakYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQVZtQixVQUFVO2dCQUdELG1CQUFtQjs7OzhCQVU3QyxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VDQUVMLE1BQU07dUNBQ04sTUFBTTtzQ0FDTixNQUFNO3FDQUNOLE1BQU07aUNBQ04sTUFBTTs4QkFDTixNQUFNO2tDQUNOLE1BQU07dUNBQ04sTUFBTTs7a0NBNUJUOztTQVdhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgQ2FsZW5kYXIgZnJvbSAndHVpLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgVHVpQ2FsZW5kYXJPcHRpb25zLCBUdWlDYWxlbmRhckRlZmF1bHRzIH0gZnJvbSAnLi9uZ3gtdHVpLWNhbGVuZGFyLWRlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZnRlclJlbmRlclNjaGVkdWxlRXZlbnQsIEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZVVwZGF0ZVNjaGVkdWxlRXZlbnQsIENsaWNrRGF5bmFtZUV2ZW50LCBDbGlja1NjaGVkdWxlRXZlbnQgfSBmcm9tICcuL01vZGVscy9FdmVudHMnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4vTW9kZWxzL1NjaGVkdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXR1aS1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUdWlDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgQElucHV0KCkgZGVmYXVsdFZpZXc6IHN0cmluZztcclxuICBASW5wdXQoKSB0YXNrVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzY2hlZHVsZVZpZXc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBtb250aDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIHdlZWs6IG9iamVjdDtcclxuICBASW5wdXQoKSBzY2hlZHVsZXM6IFNjaGVkdWxlW107XHJcblxyXG4gIEBPdXRwdXQoKSBiZWZvcmVDcmVhdGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiZWZvcmVEZWxldGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlclJlbmRlclNjaGVkdWxlOiBFdmVudEVtaXR0ZXI8QWZ0ZXJSZW5kZXJTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdHVpQ2FsZW5kYXJDcmVhdGVkOiBFdmVudEVtaXR0ZXI8eyB0dWlDYWxlbmRhcjogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXlOYW1lQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENsaWNrRGF5bmFtZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdGltZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2NoZWR1bGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8Q2xpY2tTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlVXBkYXRlU2NoZWR1bGU6IEV2ZW50RW1pdHRlcjxCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIHByaXZhdGUgdHVpQ2FsZW5kYXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsIHByaXZhdGUgZGVmYXVsdHM6IFR1aUNhbGVuZGFyRGVmYXVsdHMpIHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBUdWlDYWxlbmRhck9wdGlvbnMgPSB7XHJcbiAgICAgIGRlZmF1bHRWaWV3OiB0aGlzLmRlZmF1bHRWaWV3LFxyXG4gICAgICB0YXNrVmlldzogdGhpcy50YXNrVmlldyxcclxuICAgICAgc2NoZWR1bGVWaWV3OiB0aGlzLnNjaGVkdWxlVmlldyxcclxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXHJcbiAgICAgIG1vbnRoOiB0aGlzLm1vbnRoLFxyXG4gICAgICB3ZWVrOiB0aGlzLndlZWtcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0cykuZm9yRWFjaChvcHRpb25LZXkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb3B0aW9uS2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBvcHRpb25zW29wdGlvbktleV0gPSB0aGlzLmRlZmF1bHRzW29wdGlvbktleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uS2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29wdGlvbktleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyQ3JlYXRlZC5lbWl0KHsgdHVpQ2FsZW5kYXI6IHRoaXMudHVpQ2FsZW5kYXIgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlQ3JlYXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRyaWdnZXJFdmVudE5hbWUgPT09ICdtb3VzZXVwJykge1xyXG4gICAgICAgIHRoaXMudGltZUNsaWNrZWQuZW1pdCg8RGF0ZT5ldmVudC5zdGFydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2FmdGVyUmVuZGVyU2NoZWR1bGUnLCAoZXZlbnQ6IEFmdGVyUmVuZGVyU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdiZWZvcmVDcmVhdGVTY2hlZHVsZScsIChldmVudDogQmVmb3JlQ3JlYXRlU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmJlZm9yZUNyZWF0ZVNjaGVkdWxlLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlRGVsZXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVEZWxldGVTY2hlZHVsZS5lbWl0KGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2JlZm9yZVVwZGF0ZVNjaGVkdWxlJywgKGV2ZW50OiBCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuYmVmb3JlVXBkYXRlU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja0RheW5hbWUnLCAoZXZlbnQ6IENsaWNrRGF5bmFtZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF5TmFtZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja1NjaGVkdWxlJywgKGV2ZW50OiBDbGlja1NjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJzY2hlZHVsZXNcIl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTY2hlZHVsZXMoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNsZWFyKCk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyh0aGlzLnNjaGVkdWxlcywgdHJ1ZSk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRpbWVab25lT2Zmc2V0KG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldFRpbWVab25lT2Zmc2V0KG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VGltZVpvbmVPZmZzZXRDYWxsYmFjayhvZmZzZXQ6IHZvaWQpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0VGltZVpvbmVPZmZzZXQob2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VWaWV3KHZpZXc6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jaGFuZ2VWaWV3KHZpZXcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZGVsZXRlU2NoZWR1bGUoc2NoZWR1bGVJZCwgY2FsZW5kYXJJZCwgc2lsZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZSgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGVSYW5nZUVuZCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZVJhbmdlRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZVJhbmdlU3RhcnQoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldERhdGVSYW5nZVN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RWxlbWVudChzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRFbGVtZW50KHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9wdGlvbnMoKSB7XHJcbiAgICA8VHVpQ2FsZW5kYXJPcHRpb25zPnRoaXMudHVpQ2FsZW5kYXIuZ2V0T3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldFNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZpZXdOYW1lKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRWaWV3TmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVNb3JlVmlldygpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuaGlkZU1vcmVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXYoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnByZXYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ3JlYXRpb25Qb3B1cChzY2hlZHVsZTogYW55KSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9wZW5DcmVhdGlvblBvcHVwKHNjaGVkdWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFRvTm93KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zY3JvbGxUb05vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZDogc3RyaW5nLCBvcHRpb246IGFueSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZCwgb3B0aW9uLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFycyhjYWxlbmRhcnM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFycyhjYWxlbmRhcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhdGUoZGF0ZTogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXREYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogVHVpQ2FsZW5kYXJPcHRpb25zLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0T3B0aW9ucyhvcHRpb25zLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRoZW1lKHRoZW1lOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9kYXkoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQ6IHN0cmluZywgdG9IaWRlOiBib29sZWFuLCByZW5kZXI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIudG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQsIHRvSGlkZSwgcmVuZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTY2hlZHVsZShzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZywgc2NoZWR1bGVEYXRhOiBTY2hlZHVsZSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnVwZGF0ZVNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQsIHNjaGVkdWxlRGF0YSwgc2lsZW50KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==