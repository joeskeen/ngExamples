// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/gulp-rev/gulp-rev.d.ts
declare module 'gulp-rev' {
    interface IOptions {
        base?: string;
        cwd?: string;
        merge?: boolean;
    }

    interface IRev {
        (): NodeJS.ReadWriteStream;

        manifest(): NodeJS.ReadWriteStream;
        manifest(path?: string): NodeJS.ReadWriteStream;
        manifest(options?: IOptions): NodeJS.ReadWriteStream;
        manifest(path?: string, options?: IOptions): NodeJS.ReadWriteStream;
    }

    var rev: IRev;
    export = rev;
}