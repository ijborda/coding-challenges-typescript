import { strict as assert } from 'assert';

function htmlspecialchars (formData: string): string {
  return formData.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Test
describe('Test', () => {
  it('should past all tests', function () {
    assert.strictEqual(htmlspecialchars('abc'), 'abc');
    assert.strictEqual(htmlspecialchars('<h2>Hello World</h2>'), '&lt;h2&gt;Hello World&lt;/h2&gt;');
    assert.strictEqual(htmlspecialchars('Hello, how would you & I fare?'), 'Hello, how would you &amp; I fare?');
    assert.strictEqual(htmlspecialchars('How was "The Matrix"?  Did you like it?'), 'How was &quot;The Matrix&quot;?  Did you like it?');
    assert.strictEqual(htmlspecialchars("<script>alert('Website Hacked!');</script>"), "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;");
  });
});
