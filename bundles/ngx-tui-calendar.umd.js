(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tui-calendar')) :
    typeof define === 'function' && define.amd ? define('ngx-tui-calendar', ['exports', '@angular/core', 'tui-calendar'], factory) :
    (factory((global['ngx-tui-calendar'] = {}),global.ng.core,null));
}(this, (function (exports,core,Calendar) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TuiCalendarDefaults = (function () {
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
    var NgxTuiCalendarComponent = (function () {
        function NgxTuiCalendarComponent(elm, defaults) {
            var _this = this;
            this.elm = elm;
            this.defaults = defaults;
            this.beforeCreateSchedule = new core.EventEmitter();
            this.beforeDeleteSchedule = new core.EventEmitter();
            this.afterRenderSchedule = new core.EventEmitter();
            this.tuiCalendarCreated = new core.EventEmitter();
            this.dayNameClicked = new core.EventEmitter();
            this.timeClicked = new core.EventEmitter();
            this.scheduleClicked = new core.EventEmitter();
            this.beforeUpdateSchedule = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ngx-tui-calendar',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        NgxTuiCalendarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: TuiCalendarDefaults }
            ];
        };
        NgxTuiCalendarComponent.propDecorators = {
            defaultView: [{ type: core.Input }],
            taskView: [{ type: core.Input }],
            scheduleView: [{ type: core.Input }],
            template: [{ type: core.Input }],
            month: [{ type: core.Input }],
            week: [{ type: core.Input }],
            schedules: [{ type: core.Input }],
            beforeCreateSchedule: [{ type: core.Output }],
            beforeDeleteSchedule: [{ type: core.Output }],
            afterRenderSchedule: [{ type: core.Output }],
            tuiCalendarCreated: [{ type: core.Output }],
            dayNameClicked: [{ type: core.Output }],
            timeClicked: [{ type: core.Output }],
            scheduleClicked: [{ type: core.Output }],
            beforeUpdateSchedule: [{ type: core.Output }]
        };
        return NgxTuiCalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var USER_DEFAULTS = new core.InjectionToken('tuiCalendar defaults');
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
    var NgxTuiCalendarModule = (function () {
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
                if (userDefaults === void 0) {
                    userDefaults = {};
                }
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
            { type: core.NgModule, args: [{
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

    exports.TuiCalendarDefaults = TuiCalendarDefaults;
    exports.NgxTuiCalendarComponent = NgxTuiCalendarComponent;
    exports.USER_DEFAULTS = USER_DEFAULTS;
    exports.defaultsFactory = defaultsFactory;
    exports.NgxTuiCalendarModule = NgxTuiCalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR1aS1jYWxlbmRhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10dWktY2FsZW5kYXIvbGliL25neC10dWktY2FsZW5kYXItZGVmYXVsdHMuc2VydmljZS50cyIsIm5nOi8vbmd4LXR1aS1jYWxlbmRhci9saWIvbmd4LXR1aS1jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL25neC10dWktY2FsZW5kYXIvbGliL25neC10dWktY2FsZW5kYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlZWtPcHRpb25zIH0gZnJvbSBcIi4vTW9kZWxzL1dlZWtPcHRpb25zXCI7XHJcbmltcG9ydCB7IE1vbnRoT3B0aW9ucyB9IGZyb20gXCIuL01vZGVscy9Nb250aE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tIFwiLi9Nb2RlbHMvVGVtcGxhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHVpQ2FsZW5kYXJPcHRpb25zIHtcclxuXHRkZWZhdWx0Vmlldz86IHN0cmluZztcclxuXHR0YXNrVmlldz86IGJvb2xlYW47XHJcblx0c2NoZWR1bGVWaWV3PzogYm9vbGVhbjtcclxuXHR0ZW1wbGF0ZT86IFRlbXBsYXRlO1xyXG5cdG1vbnRoPzogTW9udGhPcHRpb25zO1xyXG4gIHdlZWs/OiBXZWVrT3B0aW9ucztcclxuICBkaXNhYmxlRGJsQ2xpY2s/OmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR1aUNhbGVuZGFyRGVmYXVsdHMge1xyXG5cdGRlZmF1bHRWaWV3ID0gJ3dlZWsnO1xyXG5cdHRhc2tWaWV3ID0gZmFsc2U7XHJcblx0dXNlQ3JlYXRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdHVzZURldGFpbFBvcHVwID0gZmFsc2U7XHJcbiAgc2NoZWR1bGVWaWV3ID0gdHJ1ZTtcclxuICBkaXNhYmxlRGJsQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgd2VlazogV2Vla09wdGlvbnMgPSB7XHJcblx0XHRkYXluYW1lczogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcclxuXHRcdHN0YXJ0RGF5T2ZXZWVrOiAxLFxyXG5cdFx0bmFycm93V2Vla2VuZDogZmFsc2UsXHJcblx0fTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCAqIGFzIENhbGVuZGFyIGZyb20gJ3R1aS1jYWxlbmRhcic7XHJcbmltcG9ydCB7IFR1aUNhbGVuZGFyT3B0aW9ucywgVHVpQ2FsZW5kYXJEZWZhdWx0cyB9IGZyb20gJy4vbmd4LXR1aS1jYWxlbmRhci1kZWZhdWx0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWZ0ZXJSZW5kZXJTY2hlZHVsZUV2ZW50LCBCZWZvcmVDcmVhdGVTY2hlZHVsZUV2ZW50LCBCZWZvcmVEZWxldGVTY2hlZHVsZUV2ZW50LCBCZWZvcmVVcGRhdGVTY2hlZHVsZUV2ZW50LCBDbGlja0RheW5hbWVFdmVudCwgQ2xpY2tTY2hlZHVsZUV2ZW50IH0gZnJvbSAnLi9Nb2RlbHMvRXZlbnRzJztcclxuaW1wb3J0IHsgU2NoZWR1bGUgfSBmcm9tICcuL01vZGVscy9TY2hlZHVsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10dWktY2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VHVpQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIFR1aUNhbGVuZGFyT3B0aW9ucyB7XHJcblxyXG4gIEBJbnB1dCgpIGRlZmF1bHRWaWV3OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFza1ZpZXc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2NoZWR1bGVWaWV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbW9udGg6IG9iamVjdDtcclxuICBASW5wdXQoKSB3ZWVrOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgc2NoZWR1bGVzOiBTY2hlZHVsZVtdO1xyXG5cclxuICBAT3V0cHV0KCkgYmVmb3JlQ3JlYXRlU2NoZWR1bGU6IEV2ZW50RW1pdHRlcjxCZWZvcmVDcmVhdGVTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmVmb3JlRGVsZXRlU2NoZWR1bGU6IEV2ZW50RW1pdHRlcjxCZWZvcmVEZWxldGVTY2hlZHVsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYWZ0ZXJSZW5kZXJTY2hlZHVsZTogRXZlbnRFbWl0dGVyPEFmdGVyUmVuZGVyU2NoZWR1bGVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHR1aUNhbGVuZGFyQ3JlYXRlZDogRXZlbnRFbWl0dGVyPHsgdHVpQ2FsZW5kYXI6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZGF5TmFtZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxDbGlja0RheW5hbWVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRpbWVDbGlja2VkOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNjaGVkdWxlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENsaWNrU2NoZWR1bGVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJlZm9yZVVwZGF0ZVNjaGVkdWxlOiBFdmVudEVtaXR0ZXI8QmVmb3JlVXBkYXRlU2NoZWR1bGVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBwcml2YXRlIHR1aUNhbGVuZGFyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLCBwcml2YXRlIGRlZmF1bHRzOiBUdWlDYWxlbmRhckRlZmF1bHRzKSB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogVHVpQ2FsZW5kYXJPcHRpb25zID0ge1xyXG4gICAgICBkZWZhdWx0VmlldzogdGhpcy5kZWZhdWx0VmlldyxcclxuICAgICAgdGFza1ZpZXc6IHRoaXMudGFza1ZpZXcsXHJcbiAgICAgIHNjaGVkdWxlVmlldzogdGhpcy5zY2hlZHVsZVZpZXcsXHJcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxyXG4gICAgICBtb250aDogdGhpcy5tb250aCxcclxuICAgICAgd2VlazogdGhpcy53ZWVrXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdHMpLmZvckVhY2gob3B0aW9uS2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29wdGlvbktleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgb3B0aW9uc1tvcHRpb25LZXldID0gdGhpcy5kZWZhdWx0c1tvcHRpb25LZXldO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbktleSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tvcHRpb25LZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhckNyZWF0ZWQuZW1pdCh7IHR1aUNhbGVuZGFyOiB0aGlzLnR1aUNhbGVuZGFyIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2JlZm9yZUNyZWF0ZVNjaGVkdWxlJywgKGV2ZW50OiBCZWZvcmVDcmVhdGVTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50cmlnZ2VyRXZlbnROYW1lID09PSAnbW91c2V1cCcpIHtcclxuICAgICAgICB0aGlzLnRpbWVDbGlja2VkLmVtaXQoPERhdGU+ZXZlbnQuc3RhcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdhZnRlclJlbmRlclNjaGVkdWxlJywgKGV2ZW50OiBBZnRlclJlbmRlclNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5hZnRlclJlbmRlclNjaGVkdWxlLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignYmVmb3JlQ3JlYXRlU2NoZWR1bGUnLCAoZXZlbnQ6IEJlZm9yZUNyZWF0ZVNjaGVkdWxlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVDcmVhdGVTY2hlZHVsZS5lbWl0KGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHVpQ2FsZW5kYXIub24oJ2JlZm9yZURlbGV0ZVNjaGVkdWxlJywgKGV2ZW50OiBCZWZvcmVEZWxldGVTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuYmVmb3JlRGVsZXRlU2NoZWR1bGUuZW1pdChldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm9uKCdiZWZvcmVVcGRhdGVTY2hlZHVsZScsIChldmVudDogQmVmb3JlVXBkYXRlU2NoZWR1bGVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmJlZm9yZVVwZGF0ZVNjaGVkdWxlLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignY2xpY2tEYXluYW1lJywgKGV2ZW50OiBDbGlja0RheW5hbWVFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRheU5hbWVDbGlja2VkLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vbignY2xpY2tTY2hlZHVsZScsIChldmVudDogQ2xpY2tTY2hlZHVsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVDbGlja2VkLmVtaXQoZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzW1wic2NoZWR1bGVzXCJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU2NoZWR1bGVzKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jbGVhcigpO1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jcmVhdGVTY2hlZHVsZXModGhpcy5zY2hlZHVsZXMsIHRydWUpO1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRUaW1lWm9uZU9mZnNldChvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRUaW1lWm9uZU9mZnNldChvZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRpbWVab25lT2Zmc2V0Q2FsbGJhY2sob2Zmc2V0OiB2b2lkKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldFRpbWVab25lT2Zmc2V0KG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVmlldyh2aWV3OiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuY2hhbmdlVmlldyh2aWV3KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVTY2hlZHVsZXMoc2NoZWR1bGVzOiBhbnlbXSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5jcmVhdGVTY2hlZHVsZXMoc2NoZWR1bGVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVTY2hlZHVsZShzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZywgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmRlbGV0ZVNjaGVkdWxlKHNjaGVkdWxlSWQsIGNhbGVuZGFySWQsIHNpbGVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGUoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldERhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREYXRlUmFuZ2VFbmQoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmdldERhdGVSYW5nZUVuZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGVSYW5nZVN0YXJ0KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXREYXRlUmFuZ2VTdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVsZW1lbnQoc2NoZWR1bGVJZDogc3RyaW5nLCBjYWxlbmRhcklkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0RWxlbWVudChzY2hlZHVsZUlkLCBjYWxlbmRhcklkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPcHRpb25zKCkge1xyXG4gICAgPFR1aUNhbGVuZGFyT3B0aW9ucz50aGlzLnR1aUNhbGVuZGFyLmdldE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTY2hlZHVsZShzY2hlZHVsZUlkOiBzdHJpbmcsIGNhbGVuZGFySWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5nZXRTY2hlZHVsZShzY2hlZHVsZUlkLCBjYWxlbmRhcklkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWaWV3TmFtZSgpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuZ2V0Vmlld05hbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlTW9yZVZpZXcoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLmhpZGVNb3JlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHQoKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmV2KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5wcmV2KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNyZWF0aW9uUG9wdXAoc2NoZWR1bGU6IGFueSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5vcGVuQ3JlYXRpb25Qb3B1cChzY2hlZHVsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxUb05vdygpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2Nyb2xsVG9Ob3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDYWxlbmRhckNvbG9yKGNhbGVuZGFySWQ6IHN0cmluZywgb3B0aW9uOiBhbnksIHNpbGVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRDYWxlbmRhckNvbG9yKGNhbGVuZGFySWQsIG9wdGlvbiwgc2lsZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDYWxlbmRhcnMoY2FsZW5kYXJzOiBhbnlbXSkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci5zZXRDYWxlbmRhcnMoY2FsZW5kYXJzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXREYXRlKGRhdGU6IERhdGUgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IFR1aUNhbGVuZGFyT3B0aW9ucywgc2lsZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnNldE9wdGlvbnMob3B0aW9ucywgc2lsZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRUaGVtZSh0aGVtZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMudHVpQ2FsZW5kYXIuc2V0VGhlbWUodGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZGF5KCkge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci50b2RheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNjaGVkdWxlcyhjYWxlbmRhcklkOiBzdHJpbmcsIHRvSGlkZTogYm9vbGVhbiwgcmVuZGVyOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR1aUNhbGVuZGFyLnRvZ2dsZVNjaGVkdWxlcyhjYWxlbmRhcklkLCB0b0hpZGUsIHJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU2NoZWR1bGUoc2NoZWR1bGVJZDogc3RyaW5nLCBjYWxlbmRhcklkOiBzdHJpbmcsIHNjaGVkdWxlRGF0YTogU2NoZWR1bGUsIHNpbGVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy50dWlDYWxlbmRhci51cGRhdGVTY2hlZHVsZShzY2hlZHVsZUlkLCBjYWxlbmRhcklkLCBzY2hlZHVsZURhdGEsIHNpbGVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4VHVpQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL25neC10dWktY2FsZW5kYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHVpQ2FsZW5kYXJPcHRpb25zLCBUdWlDYWxlbmRhckRlZmF1bHRzIH0gZnJvbSAnLi9uZ3gtdHVpLWNhbGVuZGFyLWRlZmF1bHRzLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfREVGQVVMVFM6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oXHJcblx0J3R1aUNhbGVuZGFyIGRlZmF1bHRzJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzRmFjdG9yeSh1c2VyRGVmYXVsdHM6IFR1aUNhbGVuZGFyT3B0aW9ucyk6IFR1aUNhbGVuZGFyT3B0aW9ucyB7XHJcblx0Y29uc3QgZGVmYXVsdHM6IFR1aUNhbGVuZGFyRGVmYXVsdHMgPSBuZXcgVHVpQ2FsZW5kYXJEZWZhdWx0cygpO1xyXG5cdE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHVzZXJEZWZhdWx0cyk7XHJcblx0cmV0dXJuIGRlZmF1bHRzO1xyXG59XHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbTmd4VHVpQ2FsZW5kYXJDb21wb25lbnRdLFxyXG5cdGV4cG9ydHM6IFtOZ3hUdWlDYWxlbmRhckNvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBUdWlDYWxlbmRhckRlZmF1bHRzLCB1c2VDbGFzczogVHVpQ2FsZW5kYXJEZWZhdWx0cyB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4VHVpQ2FsZW5kYXJNb2R1bGUge1xyXG5cclxuXHRzdGF0aWMgZm9yUm9vdCh1c2VyRGVmYXVsdHM6IFR1aUNhbGVuZGFyT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmd4VHVpQ2FsZW5kYXJNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IFVTRVJfREVGQVVMVFMsXHJcblx0XHRcdFx0XHR1c2VWYWx1ZTogdXNlckRlZmF1bHRzXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBUdWlDYWxlbmRhckRlZmF1bHRzLFxyXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogZGVmYXVsdHNGYWN0b3J5LFxyXG5cdFx0XHRcdFx0ZGVwczogW1VTRVJfREVGQVVMVFNdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIklucHV0IiwiT3V0cHV0IiwiSW5qZWN0aW9uVG9rZW4iLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQWNBOzsrQkFDZSxNQUFNOzRCQUNULEtBQUs7b0NBQ0csS0FBSztrQ0FDUCxLQUFLO2dDQUNOLElBQUk7bUNBQ0QsS0FBSzt3QkFFSDtnQkFDcEIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUMzRCxjQUFjLEVBQUUsQ0FBQztnQkFDakIsYUFBYSxFQUFFLEtBQUs7YUFDcEI7O2tDQTFCRjtRQTJCQzs7Ozs7O0FDM0JEO1FBaUNFLGlDQUFvQixHQUFlLEVBQVUsUUFBNkI7WUFBMUUsaUJBeURDO1lBekRtQixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7d0NBWkEsSUFBSUEsaUJBQVksRUFBRTt3Q0FDbEIsSUFBSUEsaUJBQVksRUFBRTt1Q0FDcEIsSUFBSUEsaUJBQVksRUFBRTtzQ0FDdkIsSUFBSUEsaUJBQVksRUFBRTtrQ0FDekIsSUFBSUEsaUJBQVksRUFBRTsrQkFDbEMsSUFBSUEsaUJBQVksRUFBRTttQ0FDQSxJQUFJQSxpQkFBWSxFQUFFO3dDQUNOLElBQUlBLGlCQUFZLEVBQUU7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