import ASSERT from 'node:assert/strict';
import TEST from 'node:test';
import { KeyframeParser} from '@arcticnotes/keyframe-core';
import { PowerPointPresentation} from '@arcticnotes/keyframe-ppt';

TEST( 'smoke-test', async() => {
	const parser = new KeyframeParser();
	ASSERT.ok( parser);
	const presentation = new PowerPointPresentation();
	ASSERT.ok( presentation);
});
