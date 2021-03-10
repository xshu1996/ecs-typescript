/**
 * COPYRIGHT 2021 ALL RESERVED. (C) liaoyulei, https://github.com/dualface
 */

/**
 * 组件
 */
export abstract class ECSComponent {
    /**
     * 返回类名
     */
    get name(): string {
        return this.constructor.name;
    }

    /**
     * 组件的所有者实体 ID
     */
    entityID = "";
}