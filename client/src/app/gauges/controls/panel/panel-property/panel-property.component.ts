import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GaugePanelProperty } from '../../../../_models/hmi';

@Component({
    selector: 'app-panel-property',
    templateUrl: './panel-property.component.html',
    styleUrls: ['./panel-property.component.css']
})
export class PanelPropertyComponent implements OnInit {

    @Input() data: any;
    @Output() onPropChanged: EventEmitter<any> = new EventEmitter();
    @Input('reload') set reload(b: any) {
        this._reload();
    }
    property: GaugePanelProperty;

    constructor() { }

    ngOnInit() {
        this._reload();
    }

    onPropertyChanged() {
        this.onPropChanged.emit(this.data.settings);
    }

    onTagChanged(variableId: string) {
        this.data.settings.property.variableId = variableId;
        this.onPropChanged.emit(this.data.settings);
    }

    private _reload() {
        if (!this.data.settings.property) {
            this.data.settings.property = <GaugePanelProperty>{ viewName: null, variableId: null };
        }
        this.property = this.data.settings.property;
    }
}
