import { Component, ElementRef, Input, Output, EventEmitter, NgModule, InjectionToken } from '@angular/core';
import * as Calendar from 'tui-calendar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TuiCalendarDefaults = /** @class */ (function () {
    function TuiCalendarDefaults() {
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
    return TuiCalendarDefaults;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_DEFAULTS = new InjectionToken('tuiCalendar defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */
function defaultsFactory(userDefaults) {
    /** @type {?} */
    var defaults = new TuiCalendarDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
var NgxTuiCalendarModule = /** @class */ (function () {
    function NgxTuiCalendarModule() {
    }
    /**
     * @param {?=} userDefaults
     * @return {?}
     */
    NgxTuiCalendarModule.forRoot = /**
     * @param {?=} userDefaults
     * @return {?}
     */
    function (userDefaults) {
        if (userDefaults === void 0) { userDefaults = {}; }
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
    };
    NgxTuiCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxTuiCalendarComponent],
                    exports: [NgxTuiCalendarComponent],
                    providers: [{ provide: TuiCalendarDefaults, useClass: TuiCalendarDefaults }]
                },] },
    ];
    return NgxTuiCalendarModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR1aS1jYWxlbmRhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXR1aS1jYWxlbmRhci9saWIvbmd4LXR1aS1jYWxlbmRhci1kZWZhdWx0cy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdHVpLWNhbGVuZGFyL2xpYi9uZ3gtdHVpLWNhbGVuZGFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXR1aS1jYWxlbmRhci9saWIvbmd4LXR1aS1jYWxlbmRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2Vla09wdGlvbnMgfSBmcm9tIFwiLi9Nb2RlbHMvV2Vla09wdGlvbnNcIjtcclxuaW1wb3J0IHsgTW9udGhPcHRpb25zIH0gZnJvbSBcIi4vTW9kZWxzL01vbnRoT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCIuL01vZGVscy9UZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUdWlDYWxlbmRhck9wdGlvbnMge1xyXG5cdGRlZmF1bHRWaWV3Pzogc3RyaW5nO1xyXG5cdHRhc2tWaWV3PzogYm9vbGVhbjtcclxuXHRzY2hlZHVsZVZpZXc/OiBib29sZWFuO1xyXG5cdHRlbXBsYXRlPzogVGVtcGxhdGU7XHJcblx0bW9udGg/OiBNb250aE9wdGlvbnM7XHJcbiAgd2Vlaz86IFdlZWtPcHRpb25zO1xyXG4gIGRpc2FibGVEYmxDbGljaz86Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHVpQ2FsZW5kYXJEZWZhdWx0cyB7XHJcblx0ZGVmYXVsdFZpZXcgPSAnd2Vlayc7XHJcblx0dGFza1ZpZXcgPSBmYWxzZTtcclxuXHR1c2VDcmVhdGlvblBvcHVwID0gZmFsc2U7XHJcblx0dXNlRGV0YWlsUG9wdXAgPSBmYWxzZTtcclxuICBzY2hlZHVsZVZpZXcgPSB0cnVlO1xyXG4gIGRpc2FibGVEYmxDbGljayA9IGZhbHNlO1xyXG5cclxuICB3ZWVrOiBXZWVrT3B0aW9ucyA9IHtcclxuXHRcdGRheW5hbWVzOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxyXG5cdFx0c3RhcnREYXlPZldlZWs6IDEsXHJcblx0XHRuYXJyb3dXZWVrZW5kOiBmYWxzZSxcclxuXHR9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgQ2FsZW5kYXIgZnJvbSAndHVpLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgVHVpQ2FsZW5kYXJPcHRpb25zLCBUdWlDYWxlbmRhckRlZmF1bHRzIH0gZnJvbSAnLi9uZ3gtdHVpLWNhbGVuZGFyLWRlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZnRlclJlbmRlclNjaGVkdWxlRXZlbnQsIEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQsIEJlZm9yZVVwZGF0ZVNjaGVkdWxlRXZlbnQsIENsaWNrRGF5bmFtZUV2ZW50LCBDbGlja1NjaGVkdWxlRXZlbnQgfSBmcm9tICcuL01vZGVscy9FdmVudHMnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4vTW9kZWxzL1NjaGVkdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXR1aS1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUdWlDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHJcbiAgQElucHV0KCkgZGVmYXVsdFZpZXc6IHN0cmluZztcclxuICBASW5wdXQoKSB0YXNrVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzY2hlZHVsZVZpZXc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBtb250aDogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIHdlZWs6IG9iamVjdDtcclxuICBASW5wdXQoKSBzY2hlZHVsZXM6IFNjaGVkdWxlW107XHJcblxyXG4gIEBPdXRwdXQoKSBiZWZvcmVDcmVhdGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBiZWZvcmVEZWxldGVTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZnRlclJlbmRlclNjaGVkdWxlOiBFdmVudEVtaXR0ZXI8QWZ0ZXJSZW5kZXJTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdHVpQ2FsZW5kYXJDcmVhdGVkOiBFdmVudEVtaXR0ZXI8eyB0dWlDYWxlbmRhcjogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkYXlOYW1lQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENsaWNrRGF5bmFtZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdGltZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2NoZWR1bGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8Q2xpY2tTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlVXBkYXRlU2NoZWR1bGU6IEV2ZW50RW1pdHRlcjxCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIHByaXZhdGUgdHVpQ2FsZW5kYXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsIHByaXZhdGUgZGVmYXVsdHM6IFR1aUNhbGVuZGFyRGVmYXVsdHMpIHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBUdWlDYWxlbmRhck9wdGlvbnMgPSB7XHJcbiAgICAgIGRlZmF1bHRWaWV3OiB0aGlzLmRlZmF1bHRWaWV3LFxyXG4gICAgICB0YXNrVmlldzogdGhpcy50YXNrVmlldyxcclxuICAgICAgc2NoZWR1bGVWaWV3OiB0aGlzLnNjaGVkdWxlVmlldyxcclxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXHJcbiAgICAgIG1vbnRoOiB0aGlzLm1vbnRoLFxyXG4gICAgICB3ZWVrOiB0aGlzLndlZWtcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0cykuZm9yRWFjaChvcHRpb25LZXkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb3B0aW9uS2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBvcHRpb25zW29wdGlvbktleV0gPSB0aGlzLmRlZmF1bHRzW29wdGlvbktleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uS2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29wdGlvbktleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyQ3JlYXRlZC5lbWl0KHsgdHVpQ2FsZW5kYXI6IHRoaXMudHVpQ2FsZW5kYXIgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlQ3JlYXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRyaWdnZXJFdmVudE5hbWUgPT09ICdtb3VzZXVwJykge1xyXG4gICAgICAgIHRoaXMudGltZUNsaWNrZWQuZW1pdCg8RGF0ZT5ldmVudC5zdGFydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2FmdGVyUmVuZGVyU2NoZWR1bGUnLCAoZXZlbnQ6IEFmdGVyUmVuZGVyU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdiZWZvcmVDcmVhdGVTY2hlZHVsZScsIChldmVudDogQmVmb3JlQ3JlYXRlU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmJlZm9yZUNyZWF0ZVNjaGVkdWxlLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlRGVsZXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZURlbGV0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVEZWxldGVTY2hlZHVsZS5lbWl0KGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2JlZm9yZVVwZGF0ZVNjaGVkdWxlJywgKGV2ZW50OiBCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuYmVmb3JlVXBkYXRlU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja0RheW5hbWUnLCAoZXZlbnQ6IENsaWNrRGF5bmFtZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF5TmFtZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdjbGlja1NjaGVkdWxlJywgKGV2ZW50OiBDbGlja1NjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZUNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJzY2hlZHVsZXNcIl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTY2hlZHVsZXMoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNsZWFyKCk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyh0aGlzLnNjaGVkdWxlcywgdHJ1ZSk7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRpbWVab25lT2Zmc2V0KG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldFRpbWVab25lT2Zmc2V0KG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VGltZVpvbmVPZmZzZXRDYWxsYmFjayhvZmZzZXQ6IHZvaWQpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0VGltZVpvbmVPZmZzZXQob2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VWaWV3KHZpZXc6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jaGFuZ2VWaWV3KHZpZXcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmNyZWF0ZVNjaGVkdWxlcyhzY2hlZHVsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZGVsZXRlU2NoZWR1bGUoc2NoZWR1bGVJZCwgY2FsZW5kYXJJZCwgc2lsZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZSgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGVSYW5nZUVuZCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RGF0ZVJhbmdlRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0ZVJhbmdlU3RhcnQoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldERhdGVSYW5nZVN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RWxlbWVudChzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRFbGVtZW50KHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9wdGlvbnMoKSB7XHJcbiAgICA8VHVpQ2FsZW5kYXJPcHRpb25zPnRoaXMudHVpQ2FsZW5kYXIuZ2V0T3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNjaGVkdWxlKHNjaGVkdWxlSWQ6IHN0cmluZywgY2FsZW5kYXJJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldFNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZpZXdOYW1lKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRWaWV3TmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVNb3JlVmlldygpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuaGlkZU1vcmVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dCgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXYoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnByZXYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ3JlYXRpb25Qb3B1cChzY2hlZHVsZTogYW55KSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9wZW5DcmVhdGlvblBvcHVwKHNjaGVkdWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFRvTm93KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zY3JvbGxUb05vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZDogc3RyaW5nLCBvcHRpb246IGFueSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFyQ29sb3IoY2FsZW5kYXJJZCwgb3B0aW9uLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhbGVuZGFycyhjYWxlbmRhcnM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldENhbGVuZGFycyhjYWxlbmRhcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhdGUoZGF0ZTogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXREYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogVHVpQ2FsZW5kYXJPcHRpb25zLCBzaWxlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0T3B0aW9ucyhvcHRpb25zLCBzaWxlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRoZW1lKHRoZW1lOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRUaGVtZSh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9kYXkoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQ6IHN0cmluZywgdG9IaWRlOiBib29sZWFuLCByZW5kZXI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIudG9nZ2xlU2NoZWR1bGVzKGNhbGVuZGFySWQsIHRvSGlkZSwgcmVuZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTY2hlZHVsZShzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZywgc2NoZWR1bGVEYXRhOiBTY2hlZHVsZSwgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnVwZGF0ZVNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQsIHNjaGVkdWxlRGF0YSwgc2lsZW50KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hUdWlDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXR1aS1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUdWlDYWxlbmRhck9wdGlvbnMsIFR1aUNhbGVuZGFyRGVmYXVsdHMgfSBmcm9tICcuL25neC10dWktY2FsZW5kYXItZGVmYXVsdHMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9ERUZBVUxUUzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuXHQndHVpQ2FsZW5kYXIgZGVmYXVsdHMnXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHNGYWN0b3J5KHVzZXJEZWZhdWx0czogVHVpQ2FsZW5kYXJPcHRpb25zKTogVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHRjb25zdCBkZWZhdWx0czogVHVpQ2FsZW5kYXJEZWZhdWx0cyA9IG5ldyBUdWlDYWxlbmRhckRlZmF1bHRzKCk7XHJcblx0T2JqZWN0LmFzc2lnbihkZWZhdWx0cywgdXNlckRlZmF1bHRzKTtcclxuXHRyZXR1cm4gZGVmYXVsdHM7XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtOZ3hUdWlDYWxlbmRhckNvbXBvbmVudF0sXHJcblx0ZXhwb3J0czogW05neFR1aUNhbGVuZGFyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFR1aUNhbGVuZGFyRGVmYXVsdHMsIHVzZUNsYXNzOiBUdWlDYWxlbmRhckRlZmF1bHRzIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hUdWlDYWxlbmRhck1vZHVsZSB7XHJcblxyXG5cdHN0YXRpYyBmb3JSb290KHVzZXJEZWZhdWx0czogVHVpQ2FsZW5kYXJPcHRpb25zID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3hUdWlDYWxlbmRhck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cHJvdmlkZTogVVNFUl9ERUZBVUxUUyxcclxuXHRcdFx0XHRcdHVzZVZhbHVlOiB1c2VyRGVmYXVsdHNcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IFR1aUNhbGVuZGFyRGVmYXVsdHMsXHJcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBkZWZhdWx0c0ZhY3RvcnksXHJcblx0XHRcdFx0XHRkZXBzOiBbVVNFUl9ERUZBVUxUU11cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBY0E7OzJCQUNlLE1BQU07d0JBQ1QsS0FBSztnQ0FDRyxLQUFLOzhCQUNQLEtBQUs7NEJBQ04sSUFBSTsrQkFDRCxLQUFLO29CQUVIO1lBQ3BCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUMzRCxjQUFjLEVBQUUsQ0FBQztZQUNqQixhQUFhLEVBQUUsS0FBSztTQUNwQjs7OEJBMUJGO0lBMkJDOzs7Ozs7QUMzQkQ7SUFpQ0UsaUNBQW9CLEdBQWUsRUFBVSxRQUE2QjtRQUExRSxpQkF5REM7UUF6RG1CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFxQjtvQ0FaQSxJQUFJLFlBQVksRUFBRTtvQ0FDbEIsSUFBSSxZQUFZLEVBQUU7bUNBQ3BCLElBQUksWUFBWSxFQUFFO2tDQUN2QixJQUFJLFlBQVksRUFBRTs4QkFDekIsSUFBSSxZQUFZLEVBQUU7MkJBQ2xDLElBQUksWUFBWSxFQUFFOytCQUNBLElBQUksWUFBWSxFQUFFO29DQUNOLElBQUksWUFBWSxFQUFFOztRQU8xRixJQUFNLE9BQU8sR0FBdUI7WUFDbEMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFD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