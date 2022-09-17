// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseUrl:"http://localhost:5555/springboiperplate",
  baseUrl:"http://192.168.134.88:5555/springboiperplate",
  authServiceUrl:"http://localhost:5555/springboiperplate/api/v1/auth",
  attendanceServiceUrl:"http://localhost:5555/springboiperplate/api/v1/attendance",
  coreHrServiceUrl:"http://localhost:5555/springboiperplate/api/v1/corehr",
  payrollServiceUrl:"http://localhost:5555/springboiperplate/api/v1/payroll",
 // baseUrl:"https://spring-boot-boilerplate.herokuapp.com"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
