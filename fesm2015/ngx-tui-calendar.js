import { Component, ElementRef, Input, Output, EventEmitter, NgModule, InjectionToken } from '@angular/core';
import * as Calendar from 'tui-calendar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TuiCalendarDefaults {
    constructor() {
        this.defaultView = 'week';
        this.taskView = false;
        this.useCreationPopup = false;
        this.useDetailPopup = false;
        this.scheduleView = true;
        this.disableDblClick = false;
        this.week = {
            daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            startDayOfWeek: 1,
            narrowWeekend: false,
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxTuiCalendarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_DEFAULTS = new InjectionToken('tuiCalendar defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */
function defaultsFactory(userDefaults) {
    /** @type {?} */
    const defaults = new TuiCalendarDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
class NgxTuiCalendarModule {
    /**
     * @param {?=} userDefaults
     * @return {?}
     */
    static forRoot(userDefaults = {}) {
        return {
            ngModule: NgxTuiCalendarModule,
            providers: [
                {
                    provide: USER_DEFAULTS,
                    useValue: userDefaults
                },
                {
                    provide: TuiCalendarDefaults,
                    useFactory: defaultsFactory,
                    deps: [USER_DEFAULTS]
                }
            ]
        };
    }
}
NgxTuiCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxTuiCalendarComponent],
                exports: [NgxTuiCalendarComponent],
                providers: [{ provide: TuiCalendarDefaults, useClass: TuiCalendarDefaults }]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TuiCalendarDefaults, NgxTuiCalendarComponent, USER_DEFAULTS, defaultsFactory, NgxTuiCalendarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR1aS1jYWxlbmRhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXR1aS1jYWxlbmRhci9saWIvbmd4LXR1aS1jYWxlbmRhci1kZWZhdWx0cy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdHVpLWNhbGVuZGFyL2xpYi9uZ3gtdHVpLWNhbGVuZGFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXR1aS1jYWxlbmRhci9saWIvbmd4LXR1aS1jYWxlbmRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2Vla09wdGlvbnMgfSBmcm9tIFwiLi9Nb2RlbHMvV2Vla09wdGlvbnNcIjtcclxuaW1wb3J0IHsgTW9udGhPcHRpb25zIH0gZnJvbSBcIi4vTW9kZWxzL01vbnRoT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCIuL01vZGVscy9UZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUdWlDYWxlbmRhck9wdGlvbnMge1xyXG5cdGRlZmF1bHRWaWV3Pzogc3RyaW5nO1xyXG5cdHRhc2tWaWV3PzogYm9vbGVhbjtcclxuXHRzY2hlZHVsZVZpZXc/OiBib29sZWFuO1xyXG5cdHRlbXBsYXRlPzogVGVtcGxhdGU7XHJcblx0bW9udGg/OiBNb250aE9wdGlvbnM7XHJcbiAgd2Vlaz86IFdlZWtPcHRpb25zO1xyXG4gIGRpc2FibGVEYmxDbGljaz86Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHVpQ2FsZW5kYXJEZWZhdWx0cyB7XHJcblx0ZGVmYXVsdFZpZXcgPSAnd2Vlayc7XHJcblx0dGFza1ZpZXcgPSBmYWxzZTtcclxuXHR1c2VDcmVhdGlvblBvcHVwID0gZmFsc2U7XHJcblx0dXNlRGV0YWlsUG9wdXAgPSBmYWxzZTtcclxuICBzY2hlZHVsZVZpZXcgPSB0cnVlO1xyXG4gIGRpc2FibGVEYmxDbGljayA9IGZhbHNlO1xyXG5cclxuICB3ZWVrOiBXZWVrT3B0aW9ucyA9IHtcclxuXHRcdGRheW5hbWVzOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxyXG5cdFx0c3RhcnREYXlPZldlZWs6IDEsXHJcblx0XHRuYXJyb3dXZWVrZW5kOiBmYWxzZSxcclxuXHR9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgQ2FsZW5kYXIgZnJvbSAndHVpLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgVHVpQ2FsZW5kYXJPcHRpb25zLCBUdWlDYWxlbmRhckRlZmF1bHRzIH0gZnJvbSAnLi9uZ3gtdHVpLWNhbGVuZGFyLWRlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZnRlclJlbmRlclNjaGVkdWxlRXZlbnQsIEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZVVwZGF0ZVNjaGVkdWxlRXZlbnQsIENsaWNrRGF5bmFtZUV2ZW50LCBDbGlja1NjaGVkdWxlRXZlbnQgfSBmcm9tICcuL01vZGVscy9FdmVudHMnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4vTW9kZWxzL1NjaGVkdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXR1aS1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUdWlDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgQElucHV0KCkgZGVmYXVsdFZpZXc6IHN0cmluZztcclxuICBASW5wdXQoKSB0YXNrVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzY2hlZHVsZVZpZXc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBtb250aDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIHdlZWs6IG9iamVjdDtcclxuICBASW5wdXQoKSBzY2hlZHVsZXM6IFNjaGVkdWxlW107XHJcblxyXG4gIEBPdXRwdXQoKSBiZWZvcmVDcmVhdGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiZWZvcmVEZWxldGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlclJlbmRlclNjaGVkdWxlOiBFdmVudEVtaXR0ZXI8QWZ0ZXJSZW5kZXJTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdHVpQ2FsZW5kYXJDcmVhdGVkOiBFdmVudEVtaXR0ZXI8eyB0dWlDYWxlbmRhcjogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXlOYW1lQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENsaWNrRGF5bmFtZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdGltZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2NoZWR1bGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8Q2xpY2tTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlVXBkYXRlU2NoZWR1bGU6IEV2ZW50RW1pdHRlcjxCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIHByaXZhdGUgdHVpQ2FsZW5kYXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsIHByaXZhdGUgZGVmYXVsdHM6IFR1aUNhbGVuZGFyRGVmYXVsdHMpIHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBUdWlDYWxlbmRhck9wdGlvbnMgPSB7XHJcbiAgICAgIGRlZmF1bHRWaWV3OiB0aGlzLmRlZmF1bHRWaWV3LFxyXG4gICAgICB0YXNrVmlldzogdGhpcy50YXNrVmlldyxcclxuICAgICAgc2NoZWR1bGVWaWV3OiB0aGlzLnNjaGVkdWxlVmlldyxcclxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXHJcbiAgICAgIG1vbnRoOiB0aGlzLm1vbnRoLFxyXG4gICAgICB3ZWVrOiB0aGlzLndlZWtcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0cykuZm9yRWFjaChvcHRpb25LZXkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb3B0aW9uS2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBvcHRpb25zW29wdGlvbktleV0gPSB0aGlzLmRlZmF1bHRzW29wdGlvbktleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uS2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29wdGlvbktleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyQ3JlYXRlZC5lbWl0KHsgdHVpQ2FsZW5kYXI6IHRoaXMudHVpQ2FsZW5kYXIgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlQ3JlYXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRyaWdnZXJFdmVudE5hbWUgPT09ICdtb3VzZXVwJykge1xyXG4gICAgICAgIHRoaXMudGltZUNsaWNrZWQuZW1pdCg8RGF0ZT5ldmVudC5zdGFydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2FmdGVyUmVuZGVyU2NoZWR1bGUnLCAoZXZlbnQ6IEFmdGVyUmVuZGVyU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdiZWZvcmVDcmVhdGVTY2hlZHVsZScsIChldmVudDogQmVmb3JlQ3JlYXRlU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmJlZm9yZUNyZWF0ZVNjaGVkdWxlLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlRGVsZXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVEZWxldGVTY2hlZHVsZS5lbWl0KGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2JlZm9yZVVwZGF0ZVNjaGVkdWxlJywgKGV2ZW50OiBCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuYmVmb3JlVXBkYXRlU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja0RheW5hbWUnLCAoZXZlbnQ6IENsaWNrRGF5bmFtZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF5TmFtZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja1NjaGVkdWxlJywgKGV2ZW50OiBDbGlja1NjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJzY2hlZHVsZXNcIl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTY2hlZHVsZXMoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNsZWFyKCk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyh0aGlzLnNjaGVkdWxlcywgdHJ1ZSk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRpbWVab25lT2Zmc2V0KG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldFRpbWVab25lT2Zmc2V0KG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VGltZVpvbmVPZmZzZXRDYWxsYmFjayhvZmZzZXQ6IHZvaWQpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0VGltZVpvbmVPZmZzZXQob2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VWaWV3KHZpZXc6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jaGFuZ2VWaWV3KHZpZXcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZGVsZXRlU2NoZWR1bGUoc2NoZWR1bGVJZCwgY2FsZW5kYXJJZCwgc2lsZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZSgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGVSYW5nZUVuZCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZVJhbmdlRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZVJhbmdlU3RhcnQoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldERhdGVSYW5nZVN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RWxlbWVudChzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRFbGVtZW50KHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9wdGlvbnMoKSB7XHJcbiAgICA8VHVpQ2FsZW5kYXJPcHRpb25zPnRoaXMudHVpQ2FsZW5kYXIuZ2V0T3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldFNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZpZXdOYW1lKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRWaWV3TmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVNb3JlVmlldygpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuaGlkZU1vcmVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXYoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnByZXYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ3JlYXRpb25Qb3B1cChzY2hlZHVsZTogYW55KSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9wZW5DcmVhdGlvblBvcHVwKHNjaGVkdWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFRvTm93KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zY3JvbGxUb05vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZDogc3RyaW5nLCBvcHRpb246IGFueSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZCwgb3B0aW9uLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFycyhjYWxlbmRhcnM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFycyhjYWxlbmRhcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhdGUoZGF0ZTogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXREYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogVHVpQ2FsZW5kYXJPcHRpb25zLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0T3B0aW9ucyhvcHRpb25zLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRoZW1lKHRoZW1lOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9kYXkoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQ6IHN0cmluZywgdG9IaWRlOiBib29sZWFuLCByZW5kZXI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIudG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQsIHRvSGlkZSwgcmVuZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTY2hlZHVsZShzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZywgc2NoZWR1bGVEYXRhOiBTY2hlZHVsZSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnVwZGF0ZVNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQsIHNjaGVkdWxlRGF0YSwgc2lsZW50KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hUdWlDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXR1aS1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUdWlDYWxlbmRhck9wdGlvbnMsIFR1aUNhbGVuZGFyRGVmYXVsdHMgfSBmcm9tICcuL25neC10dWktY2FsZW5kYXItZGVmYXVsdHMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9ERUZBVUxUUzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuXHQndHVpQ2FsZW5kYXIgZGVmYXVsdHMnXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHNGYWN0b3J5KHVzZXJEZWZhdWx0czogVHVpQ2FsZW5kYXJPcHRpb25zKTogVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHRjb25zdCBkZWZhdWx0czogVHVpQ2FsZW5kYXJEZWZhdWx0cyA9IG5ldyBUdWlDYWxlbmRhckRlZmF1bHRzKCk7XHJcblx0T2JqZWN0LmFzc2lnbihkZWZhdWx0cywgdXNlckRlZmF1bHRzKTtcclxuXHRyZXR1cm4gZGVmYXVsdHM7XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtOZ3hUdWlDYWxlbmRhckNvbXBvbmVudF0sXHJcblx0ZXhwb3J0czogW05neFR1aUNhbGVuZGFyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFR1aUNhbGVuZGFyRGVmYXVsdHMsIHVzZUNsYXNzOiBUdWlDYWxlbmRhckRlZmF1bHRzIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUdWlDYWxlbmRhck1vZHVsZSB7XHJcblxyXG5cdHN0YXRpYyBmb3JSb290KHVzZXJEZWZhdWx0czogVHVpQ2FsZW5kYXJPcHRpb25zID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3hUdWlDYWxlbmRhck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvdmlkZTogVVNFUl9ERUZBVUxUUyxcclxuXHRcdFx0XHRcdHVzZVZhbHVlOiB1c2VyRGVmYXVsdHNcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IFR1aUNhbGVuZGFyRGVmYXVsdHMsXHJcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBkZWZhdWx0c0ZhY3RvcnksXHJcblx0XHRcdFx0XHRkZXBzOiBbVVNFUl9ERUZBVUxUU11cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7MkJBZWUsTUFBTTt3QkFDVCxLQUFLO2dDQUNHLEtBQUs7OEJBQ1AsS0FBSzs0QkFDTixJQUFJOytCQUNELEtBQUs7b0JBRUg7WUFDcEIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQzNELGNBQWMsRUFBRSxDQUFDO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1NBQ3BCOztDQUNEOzs7Ozs7QUMzQkQ7Ozs7O0lBaUNFLFlBQW9CLEdBQWUsRUFBVSxRQUE2QjtRQUF0RCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7b0NBWkEsSUFBSSxZQUFZLEVBQUU7b0NBQ2xCLElBQUksWUFBWSxFQUFFO21DQUNwQixJQUFJLFlBQVksRUFBRTtrQ0FDdkIsSUFBSSxZQUFZLEVBQUU7OEJBQ3pCLElBQUksWUFBWSxFQUFFOzJCQUNsQyxJQUFJLFlBQVksRUFBRTsrQkFDQSxJQUFJLFlBQVksRUFBRTtvQ0FDTixJQUFJLFlBQVksRUFBRTs7UUFPMUYsTUFBTSxPQUFPLEdBQXVCO1lBQ2xDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFFBQVEsRUFBRSxJ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