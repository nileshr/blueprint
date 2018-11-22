/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { FileInput, H5, Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";

export interface IFileInputExampleState {
    directory: boolean;
    disabled: boolean;
    fill: boolean;
    large: boolean;
}

export class FileInputExample extends React.PureComponent<IExampleProps, IFileInputExampleState> {
    public state: IFileInputExampleState = {
        directory: false,
        disabled: false,
        fill: false,
        large: false,
    };

    private handleDisabledChange = handleBooleanChange(disabled => this.setState({ disabled }));
    private handleDirectoryChange = handleBooleanChange(directory => this.setState({ directory }));
    private handleFillChange = handleBooleanChange(fill => this.setState({ fill }));
    private handleLargeChange = handleBooleanChange(large => this.setState({ large }));

    public render() {
        const { disabled, directory, fill, large } = this.state;

        const options = (
            <>
                <H5>Props</H5>
                <Switch label="Disabled" checked={disabled} onChange={this.handleDisabledChange} />
                <Switch label="Directory" checked={directory} onChange={this.handleDirectoryChange} />
                <Switch label="Fill" checked={fill} onChange={this.handleFillChange} />
                <Switch label="Large" checked={large} onChange={this.handleLargeChange} />
            </>
        );

        return (
            <Example options={options} {...this.props}>
                <FileInput {...this.state} />
            </Example>
        );
    }
}
