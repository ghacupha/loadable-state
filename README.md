## Loadable-State-Pattern

This add-on to redux/ngrx is a clone of https://github.com/zhaosiyang/loadable-state with a newer typescript version and a few more state variables

### Install

```npm install loadable-state```

### Get Started

__Let's assume we need to send an http request to get a list of today's news.__ And we are using Angular/ngrx.

####Step1: Model your state
```typescript
export interface News extends Loadable {
    news: string[];
}
```
In this way, `News` model has 4 fields: `news`, `loading`, `success` and `error`.

####Step2: Create your actions
```typescript
export enum NewsActionsTypes {
  Load = '[NEWS PAGE] LOAD NEWS',
  LoadSuccess = '[NEWS PAGE] LOAD NEWS SUCCESS',
  LoadError = '[NEWS PAGE] LOAD NEWS ERROR',
}

export class LoadNews implements Action {
  readonly type = NewsActionsTypes.Load;
}

export class LoadNewsSuccess implements Action {
  readonly type = NewsActionsTypes.LoadSuccess;
  constructor(public payload: {entities: string[]}) {}
}

export class LoadNewsError implements Action {
  readonly type = NewsActionsTypes.LoadError;
  // Notes that `error` has to be like this, cannot be wrapped inside a payload
  constructor(public error: any) {}
}
export type NewsActions = LoadNews | LoadNewsSuccess | LoadNewsError
```

####Step3 Reducer (Most Important)
```typescript
// base reducer should only update non-loadable states
function baseNewsReducer(state: News = createDefaultNews(), action: NewsActions): News {
  switch (action.type) {
    case NewsActionsTypes.LoadSuccess:
      return {
        ...state,
        entities: action.payload.entities
      };
    default:
      return state;
  }
}
// withLoadable enhances baseReducer to update loadable state
export function newsReducer(state: News, action: Action): News {
  return withLoadable(baseNewsReducer, {
    loadingActionType: NewsActionsTypes.Load,
    successActionType: NewsActionsTypes.LoadSuccess,
    errorActionType: NewsActionsTypes.LoadError,
  })(state, action);
}
```
`baseNewsReducer` handles non-loadable states (i.e. entities)

`newsReducer` will actually apply `withLoadable` enhancer to `baseReducer` to give some “magic” to `baseReducer` , and the “magic” is to handle the 3 loadable states changes automatically.
 
 ####Step4 Effects
 ```typescript
@Effect()
loadNews = this.actions$.pipe(
  ofType(NewsActionsTypes.Load),
  switchMap(action => this.http.get('some url')),
  map((response: any) => new LoadNewsSuccess({entities: response.todaysNews})),
  catchError(error => of(new LoadNewsError(error)))
);
```

Checkout this StackBlitz for a complete example. https://stackblitz.com/github/zhaosiyang/loadable-example



