import { Routes } from "@angular/router";
import { UsersDataComponent } from "./users-data.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ScoreGuard } from "../../core/guards/guard-score.guard";

export const UsersDataRoutes: Routes = [
    {
        path: '',
        component: UsersDataComponent,
    },
    {
        path: 'user/:userName',
        component: UserProfileComponent,
        // canActivate: [ScoreGuard], // No puedo encontrar un usuario con un score mayor a 30.0
    }
]