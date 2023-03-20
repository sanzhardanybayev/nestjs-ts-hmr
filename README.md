# NestJS HMR not working when using with Docker 

## Description
When running `docker-compose up` with the current `command` in the `docker-compose` file including `npm i --verbose`, Docker seems to exit after installing the packages. However, after removing `npm i --verbose` from the `command` in the `docker-compose` file and running `docker-compose up` again, Docker runs without any issues.

Furthermore, editing any source file does not trigger rebuilding as expected. The issue is not with the mounting of files, as changes made directly from the container do not solve the issue either. The only solution to trigger Docker rebuild is to force downgrade to `4.6.5`.

## Steps to Reproduce
1. Run `docker-compose up`
2. If Docker exits after installing packages, remove `npm i --verbose` from `command` in the `docker-compose` file and run `docker-compose up` again.
3. Edit any source file and observe that changes made to the file do not trigger rebuilding.

## Expected Behavior
Editing any source file should trigger rebuilding, as Docker should recognize changes made to the files and rebuild accordingly.

## Actual Behavior
Changes made to any source file do not trigger rebuilding.

## Possible Solution
The current version of Docker seems to be incompatible with the current `command` in the `docker-compose` file. Downgrading to `4.6.5` could be a temporary solution until a more permanent fix is found.
